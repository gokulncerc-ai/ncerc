'use client';
import { useRef, useState } from 'react';
import { Camera, Trash2 } from 'lucide-react';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/ToastProvider';
import { useAuth } from '@/hooks/useAuth';
import { authApi } from '@/lib/api/auth.api';
import { errorMessage } from '@/lib/api/client';

const ALLOWED = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_MB = 5; // keep in sync with MAX_IMAGE_SIZE_MB on the server (the server is the real check)

/** Shows the current picture (or initials) and lets the signed-in user upload or remove it. */
export function AvatarUploader() {
    const toast = useToast();
    const { user, reload } = useAuth();
    const inputRef = useRef<HTMLInputElement>(null);
    const [busy, setBusy] = useState<'upload' | 'remove' | null>(null);
    const [error, setError] = useState('');

    const initials = (user?.name ?? '?')
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]!.toUpperCase())
        .join('');

    const onPick = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        e.target.value = ''; // lets the user pick the same file again later
        if (!file) return;

        if (!ALLOWED.includes(file.type)) return setError('Only JPG, PNG or WEBP images are allowed.');
        if (file.size > MAX_MB * 1024 * 1024) return setError(`Image is too large (max ${MAX_MB} MB).`);

        setError('');
        setBusy('upload');
        try {
            await authApi.updateAvatar(file);
            await reload();
            toast.success('Profile picture updated.');
        } catch (err) {
            setError(errorMessage(err));
        } finally {
            setBusy(null);
        }
    };

    const onRemove = async () => {
        setError('');
        setBusy('remove');
        try {
            await authApi.removeAvatar();
            await reload();
            toast.success('Profile picture removed.');
        } catch (err) {
            setError(errorMessage(err));
        } finally {
            setBusy(null);
        }
    };

    return (
        <section className="space-y-4 rounded-lg border border-rule bg-sheet p-6">
            <h2 className="text-xl font-semibold">Profile picture</h2>
            {error && <Alert tone="error">{error}</Alert>}

            <div className="flex flex-wrap items-center gap-5">
                {user?.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={user.avatar} alt="Your profile picture" className="size-24 rounded-full border border-rule object-cover" />
                ) : (
                    <div aria-hidden className="flex size-24 items-center justify-center rounded-full bg-blueprint text-2xl font-semibold text-white">
                        {initials}
                    </div>
                )}

                <div className="space-y-2">
                    <div className="flex flex-wrap gap-3">
                        <Button type="button" variant="outline" loading={busy === 'upload'} disabled={busy !== null} onClick={() => inputRef.current?.click()}>
                            <Camera className="size-4" /> {user?.avatar ? 'Change picture' : 'Upload picture'}
                        </Button>
                        {user?.avatar && (
                            <Button type="button" variant="ghost" loading={busy === 'remove'} disabled={busy !== null} onClick={onRemove}>
                                <Trash2 className="size-4" /> Remove
                            </Button>
                        )}
                    </div>
                    <p className="text-sm text-ink-soft">JPG, PNG or WEBP, up to {MAX_MB} MB. It is cropped to a square.</p>
                </div>

                <input ref={inputRef} type="file" accept={ALLOWED.join(',')} className="hidden" onChange={onPick} />
            </div>
        </section>
    );
}
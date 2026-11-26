'use client';
import { AvatarUploader } from '@/components/account/AvatarUploader';
import { ChangePasswordForm } from '@/components/account/ChangePasswordForm';
import { ProfileForm } from '@/components/account/ProfileForm';
import { PageHeader } from '@/components/layout/PageHeader';

export default function ProfilePage() {
  return (
    <>
      <PageHeader title="My profile" description="Keep your contact details up to date." />
      <div className="max-w-2xl space-y-6">
        <AvatarUploader />
        <ProfileForm />
        <ChangePasswordForm />
      </div>
    </>
  );
}
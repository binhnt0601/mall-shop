import { t, Trans } from "@lingui/macro";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

import AvatarUploader from "@/components/AvatarUploader";
import ProfileSection from "@/components/ProfileSection";
import { toast } from "@/helpers/toast";
import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import BasicInfoForm from "@/modules/ManagementPage/Profile/BasicInfoForm";
import PasswordForm from "@/modules/ManagementPage/Profile/PasswordForm";
import PaymentInfoForm from "@/modules/ManagementPage/Profile/PaymentInfoForm";
import PersonalInfoForm from "@/modules/ManagementPage/Profile/PersonalInfoForm";
import { UserService } from "@/services/user/user.repo";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import { useLoadingStore } from "@/stores/loadingStore";

const SECTIONS = [
  {
    key: "personal",
    title: t`Personal Information`,
    FormComponent: PersonalInfoForm,
    formId: "personalForm",
    toastSuccess: t`Updated personal info!`,
    api: async (data: any) => UserService.updateProfile(data),
    setAuthOnSuccess: true,
  },
  {
    key: "basic",
    title: t`Basic Information`,
    FormComponent: BasicInfoForm,
    formId: "basicForm",
    toastSuccess: t`Updated basic information!`,
    api: async (data: any) => UserService.updateProfile(data),
    setAuthOnSuccess: true,
  },
  {
    key: "payment",
    title: t`Payment Method`,
    FormComponent: PaymentInfoForm,
    formId: "paymentForm",
    toastSuccess: t`Updated payment method!`,
    api: async (data: any) => UserService.updateProfile(data),
    setAuthOnSuccess: true,
  },
  {
    key: "password",
    title: t`Change Password`,
    FormComponent: PasswordForm,
    formId: "passwordForm",
    toastSuccess: t`Password changed successfully!`,
    api: async (data: any) => UserService.updatePassword(data),
    setAuthOnSuccess: false,
  },
] as const;

const ProfilePage = () => {
  const { auth: user, setAuth } = useAuthStore();
  const { setLoading } = useLoadingStore();
  const [editState, setEditState] = useState<Record<string, boolean>>({});

  const handleSubmit =
    (section: (typeof SECTIONS)[number]) => async (data: any) => {
      try {
        setLoading(true);
        const res = await section.api(data);
        if (section.setAuthOnSuccess && res) setAuth(res);
        toast.success(section.toastSuccess);
        setEditState((s) => ({ ...s, [section.key]: false }));
      } catch (error: any) {
        toast.error(error?.message || t`Something went wrong!`);
      } finally {
        setLoading(false);
      }
    };

  return (
    <Box sx={{ bgcolor: "#f4f6fa", py: 5, px: 3, borderRadius: 8 }}>
      <Box sx={{ maxWidth: 630, mx: "auto" }}>
        <Stack alignItems="center" mb={3} gap={1.5}>
          <AvatarUploader
            user={user}
            onUploaded={(url) => {
              setAuth({ ...user, avatar: url });
            }}
          />
          <Typography fontWeight={700} fontSize={22}>
            {user?.name || <Trans>No Name</Trans>}
          </Typography>
          <Typography color="text.secondary" fontSize={16}>
            {user?.email}
          </Typography>
        </Stack>

        {SECTIONS.map((section) => {
          const { key, title, FormComponent, formId } = section;
          return (
            <ProfileSection
              key={key}
              title={title}
              editing={!!editState[key]}
              onEdit={() => setEditState((s) => ({ ...s, [key]: true }))}
              onSave={() =>
                document
                  .getElementById(formId)
                  ?.dispatchEvent(
                    new Event("submit", { cancelable: true, bubbles: true })
                  )
              }
              onCancel={() => setEditState((s) => ({ ...s, [key]: false }))}
            >
              <FormComponent
                user={user}
                editing={!!editState[key]}
                onSubmit={handleSubmit(section)}
                formId={formId}
              />
            </ProfileSection>
          );
        })}
      </Box>
    </Box>
  );
};

ProfilePage.Layout = AdminLayout;
export default ProfilePage;

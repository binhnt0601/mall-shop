import { Box, Avatar, Stack, Typography } from "@mui/material";
import { useState } from "react";

import ProfileSection from "@/components/ProfileSection";
import BasicInfoForm from "@/modules/ManagementPage/Profile/BasicInfoForm";
import PasswordForm from "@/modules/ManagementPage/Profile/PasswordForm";
import PaymentInfoForm from "@/modules/ManagementPage/Profile/PaymentInfoForm";
import PersonalInfoForm from "@/modules/ManagementPage/Profile/PersonalInfoForm";
import { useAuthStore } from "@/stores/auth/useAuthStore";

const ProfilePage = () => {
  const { auth: user } = useAuthStore();

  const [editPersonal, setEditPersonal] = useState(false);
  const [editBasic, setEditBasic] = useState(false);
  const [editPayment, setEditPayment] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const handlePersonalSave = async (data: any) => {
    // await api.updatePersonal(data);
    setEditPersonal(false);
  };
  const handleBasicSave = async (data: any) => {
    setEditBasic(false);
  };
  const handlePaymentSave = async (data: any) => {
    setEditPayment(false);
  };
  const handlePasswordSave = async (data: any) => {
    setEditPassword(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f6fa", py: 5 }}>
      <Box sx={{ maxWidth: 630, mx: "auto" }}>
        <Stack alignItems="center" mb={3} gap={1.5}>
          <Avatar
            src={user?.avatar}
            sx={{ width: 84, height: 84, boxShadow: 2 }}
          />
          <Typography fontWeight={700} fontSize={22}>
            {user?.name || "No Name"}
          </Typography>
          <Typography color="text.secondary" fontSize={16}>
            {user?.email}
          </Typography>
        </Stack>

        {/* Personal Info */}
        <ProfileSection
          title="Personal Information"
          editing={editPersonal}
          onEdit={() => setEditPersonal(true)}
          onSave={() =>
            document
              .getElementById("personalForm")
              ?.dispatchEvent(
                new Event("submit", { cancelable: true, bubbles: true })
              )
          }
          onCancel={() => setEditPersonal(false)}
        >
          <PersonalInfoForm
            user={user}
            editing={editPersonal}
            onSubmit={handlePersonalSave}
            formId="personalForm"
          />
        </ProfileSection>

        {/* Basic Info */}
        <ProfileSection
          title="Basic Information"
          editing={editBasic}
          onEdit={() => setEditBasic(true)}
          onSave={() =>
            document
              .getElementById("basicForm")
              ?.dispatchEvent(
                new Event("submit", { cancelable: true, bubbles: true })
              )
          }
          onCancel={() => setEditBasic(false)}
        >
          <BasicInfoForm
            user={user}
            editing={editBasic}
            onSubmit={handleBasicSave}
            formId="basicForm"
          />
        </ProfileSection>

        {/* Payment Info */}
        <ProfileSection
          title="Payment Method"
          editing={editPayment}
          onEdit={() => setEditPayment(true)}
          onSave={() =>
            document
              .getElementById("paymentForm")
              ?.dispatchEvent(
                new Event("submit", { cancelable: true, bubbles: true })
              )
          }
          onCancel={() => setEditPayment(false)}
        >
          <PaymentInfoForm
            user={user}
            editing={editPayment}
            onSubmit={handlePaymentSave}
            formId="paymentForm"
          />
        </ProfileSection>

        {/* Change Password */}
        <ProfileSection
          title="Change Password"
          editing={editPassword}
          onEdit={() => setEditPassword(true)}
          onSave={() =>
            document
              .getElementById("passwordForm")
              ?.dispatchEvent(
                new Event("submit", { cancelable: true, bubbles: true })
              )
          }
          onCancel={() => setEditPassword(false)}
        >
          <PasswordForm
            editing={editPassword}
            onSubmit={handlePasswordSave}
            formId="passwordForm"
          />
        </ProfileSection>
      </Box>
    </Box>
  );
};

export default ProfilePage;

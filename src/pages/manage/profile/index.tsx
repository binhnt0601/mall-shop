// ProfileSections.tsx
import { Box, Card, Typography, Button, Divider, Stack } from "@mui/material";
import { useState } from "react";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import PersonalInfoModal from "@/modules/ManagementPage/Profile/PersonalInfoModal";
import { useAuthStore } from "@/stores/auth/useAuthStore";

// import BasicInfoModal from "./modals/BasicInfoModal";
// import PasswordModal from "./modals/PasswordModal";
// import PaymentModal from "./modals/PaymentModal";

const ProfilePage = () => {
  const { auth: user } = useAuthStore();

  const [openPersonal, setOpenPersonal] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  return (
    <Box>
      {/* Personal Information */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontWeight="bold">Personal Information</Typography>
          <Button
            onClick={() => setOpenPersonal(true)}
            variant="outlined"
            color="warning"
          >
            Edit ✏️
          </Button>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography>Name</Typography>
        <input disabled value={user?.name} style={{ width: "100%" }} />
        <Typography>Email</Typography>
        <input disabled value={user?.email} style={{ width: "100%" }} />
        {/* googleId nếu có */}
        {user?.googleId && (
          <>
            <Typography>Google ID</Typography>
            <input disabled value={user.googleId} style={{ width: "100%" }} />
          </>
        )}
      </Card>
      <PersonalInfoModal
        open={openPersonal}
        user={user}
        onClose={() => setOpenPersonal(false)}
      />

      {/* Basic Information */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontWeight="bold">Basic Information</Typography>
          <Button
            onClick={() => setOpenBasic(true)}
            variant="outlined"
            color="warning"
          >
            Edit ✏️
          </Button>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography>Referral Code</Typography>
        <input disabled value={user?.referralCode} style={{ width: "100%" }} />
        <Typography>Phone</Typography>
        <input disabled value={user?.phone} style={{ width: "100%" }} />
        <Typography>Address</Typography>
        <input disabled value={user?.address || ""} style={{ width: "100%" }} />
      </Card>
      {/* <BasicInfoModal
        open={openBasic}
        user={user}
        onClose={() => setOpenBasic(false)}
      /> */}

      {/* Payment method */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontWeight="bold">Payment method</Typography>
          <Button
            onClick={() => setOpenPayment(true)}
            variant="outlined"
            color="warning"
          >
            Edit ✏️
          </Button>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography>Bank Name</Typography>
        <input
          disabled
          value={user?.payment?.bankName || ""}
          style={{ width: "100%" }}
        />
        <Typography>Account Holder Name</Typography>
        <input
          disabled
          value={user?.payment?.accountBankName || ""}
          style={{ width: "100%" }}
        />
        <Typography>Bank Number</Typography>
        <input
          disabled
          value={user?.payment?.bankNumber || ""}
          style={{ width: "100%" }}
        />
      </Card>
      {/* <PaymentModal
        open={openPayment}
        user={user}
        onClose={() => setOpenPayment(false)}
      /> */}

      {/* Setting (Change password) */}
      <Card sx={{ p: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontWeight="bold">Setting</Typography>
          <Button
            onClick={() => setOpenPassword(true)}
            variant="outlined"
            color="warning"
          >
            Edit ✏️
          </Button>
        </Stack>
      </Card>
      {/* <PasswordModal
        open={openPassword}
        user={user}
        onClose={() => setOpenPassword(false)}
      /> */}
    </Box>
  );
};

ProfilePage.Layout = AdminLayout;
export default ProfilePage;

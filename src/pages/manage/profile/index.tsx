import {
  Box,
  Card,
  Typography,
  Button,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
import { useState } from "react";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import BasicInfoModal from "@/modules/ManagementPage/Profile/BasicInfoModal";
import PasswordModal from "@/modules/ManagementPage/Profile/PasswordModal";
import PaymentModal from "@/modules/ManagementPage/Profile/PaymentModal";
import PersonalInfoModal from "@/modules/ManagementPage/Profile/PersonalInfoModal";
import { useAuthStore } from "@/stores/auth/useAuthStore";

const ProfilePage = () => {
  const { auth: user } = useAuthStore();

  const [openPersonal, setOpenPersonal] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", pt: 4, pb: 4 }}>
      {/* Personal Information */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Stack direction="row" alignItems="center" spacing={2} mb={2}>
          <Avatar src={user?.avatar} sx={{ width: 56, height: 56 }} />
          <Typography fontWeight="bold" flex={1} fontSize={20}>
            Personal Information
          </Typography>
          <Button
            onClick={() => setOpenPersonal(true)}
            variant="outlined"
            color="warning"
            size="small"
          >
            Edit ✏️
          </Button>
        </Stack>
        <Divider sx={{ mb: 2 }} />
        <Stack spacing={1.2}>
          <Typography variant="subtitle2" color="text.secondary">
            Name
          </Typography>
          <input
            disabled
            value={user?.name || ""}
            style={{
              width: "100%",
              background: "#f6f6f7",
              border: "none",
              padding: 8,
              borderRadius: 6,
            }}
          />
          <Typography variant="subtitle2" color="text.secondary">
            Email
          </Typography>
          <input
            disabled
            value={user?.email || ""}
            style={{
              width: "100%",
              background: "#f6f6f7",
              border: "none",
              padding: 8,
              borderRadius: 6,
            }}
          />
          {user?.googleId && (
            <>
              <Typography variant="subtitle2" color="text.secondary">
                Google ID
              </Typography>
              <input
                disabled
                value={user.googleId}
                style={{
                  width: "100%",
                  background: "#f6f6f7",
                  border: "none",
                  padding: 8,
                  borderRadius: 6,
                }}
              />
            </>
          )}
        </Stack>
      </Card>
      <PersonalInfoModal
        open={openPersonal}
        user={user}
        onClose={() => setOpenPersonal(false)}
      />

      {/* Basic Information */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Stack direction="row" alignItems="center" spacing={2} mb={2}>
          <Typography fontWeight="bold" flex={1} fontSize={20}>
            Basic Information
          </Typography>
          <Button
            onClick={() => setOpenBasic(true)}
            variant="outlined"
            color="warning"
            size="small"
          >
            Edit ✏️
          </Button>
        </Stack>
        <Divider sx={{ mb: 2 }} />
        <Stack spacing={1.2}>
          <Typography variant="subtitle2" color="text.secondary">
            Referral Code
          </Typography>
          <input
            disabled
            value={user?.referralCode || ""}
            style={{
              width: "100%",
              background: "#f6f6f7",
              border: "none",
              padding: 8,
              borderRadius: 6,
            }}
          />
          <Typography variant="subtitle2" color="text.secondary">
            Phone
          </Typography>
          <input
            disabled
            value={user?.phone || ""}
            style={{
              width: "100%",
              background: "#f6f6f7",
              border: "none",
              padding: 8,
              borderRadius: 6,
            }}
          />
          <Typography variant="subtitle2" color="text.secondary">
            Address
          </Typography>
          <input
            disabled
            value={user?.address || ""}
            style={{
              width: "100%",
              background: "#f6f6f7",
              border: "none",
              padding: 8,
              borderRadius: 6,
            }}
          />
        </Stack>
      </Card>
      <BasicInfoModal
        open={openBasic}
        user={user}
        onClose={() => setOpenBasic(false)}
      />

      {/* Payment method */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Stack direction="row" alignItems="center" spacing={2} mb={2}>
          <Typography fontWeight="bold" flex={1} fontSize={20}>
            Payment method
          </Typography>
          <Button
            onClick={() => setOpenPayment(true)}
            variant="outlined"
            color="warning"
            size="small"
          >
            Edit ✏️
          </Button>
        </Stack>
        <Divider sx={{ mb: 2 }} />
        <Stack spacing={1.2}>
          <Typography variant="subtitle2" color="text.secondary">
            Bank Name
          </Typography>
          <input
            disabled
            value={user?.payment?.bankName || ""}
            style={{
              width: "100%",
              background: "#f6f6f7",
              border: "none",
              padding: 8,
              borderRadius: 6,
            }}
          />
          <Typography variant="subtitle2" color="text.secondary">
            Account Holder Name
          </Typography>
          <input
            disabled
            value={user?.payment?.accountBankName || ""}
            style={{
              width: "100%",
              background: "#f6f6f7",
              border: "none",
              padding: 8,
              borderRadius: 6,
            }}
          />
          <Typography variant="subtitle2" color="text.secondary">
            Bank Number
          </Typography>
          <input
            disabled
            value={user?.payment?.bankNumber || ""}
            style={{
              width: "100%",
              background: "#f6f6f7",
              border: "none",
              padding: 8,
              borderRadius: 6,
            }}
          />
        </Stack>
      </Card>
      <PaymentModal
        open={openPayment}
        user={user}
        onClose={() => setOpenPayment(false)}
      />

      {/* Setting (Change password) */}
      <Card sx={{ p: 3 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography fontWeight="bold" flex={1} fontSize={20}>
            Setting
          </Typography>
          <Button
            onClick={() => setOpenPassword(true)}
            variant="outlined"
            color="warning"
            size="small"
          >
            Change password
          </Button>
        </Stack>
      </Card>
      <PasswordModal
        open={openPassword}
        user={user}
        onClose={() => setOpenPassword(false)}
      />
    </Box>
  );
};

ProfilePage.Layout = AdminLayout;
export default ProfilePage;

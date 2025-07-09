import { Chip } from '@mui/material';
import { useStatusLabel } from '@/hooks/useStatusLabel';

export function BadgeStatus({ status }: { status?: string }) {
  const { color, text, label } = useStatusLabel(status);

  return (
    <Chip
      label={label}
      size='small'
      sx={{
        background: color,
        color: text,
        fontWeight: 500,
        textTransform: 'capitalize',
      }}
      variant='filled'
    />
  );
}

export default BadgeStatus;

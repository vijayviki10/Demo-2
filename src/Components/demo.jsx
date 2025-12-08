import MailIcon from '@mui/icons-material/Mail';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { Context } from "./Context";


export function Demo() {

  function Alerts() {
    alert("Alert Danger");
  }

  const { count } = useContext(Context);

  return (
    <>
      <button onClick={Alerts}>Thoduda🤬</button>

      <Badge badgeContent={count} color="primary" max={999}>
        <MailIcon color="action" />
      </Badge>
    </>
  );
}

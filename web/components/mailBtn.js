const MailBtn = () => {
  const openMail = () => {
    window.open("mailto:test@example.com?subject=subject&body=body");
  };
  return <button onClick={openMail}>Skicka Mail</button>;
};

export default MailBtn;

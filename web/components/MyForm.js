export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
    this.subject = props.subject;
    this.fields = props.fields;
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mqkgzbwq"
        method="POST"
      >
        <input type="hidden" name="subject" value={this.subject} />
        {this.fields.map((field) => (
          <div key={field}>
            <label>{field}</label>
            <input type={field} name={field} />
          </div>
        ))}
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

//alternative solution, opening mail client
// const MailBtn = () => {
//   const openMail = () => {
//     window.open("mailto:test@example.com?subject=subject&body=body");
//   };
//   return <button onClick={openMail}>Skicka Mail</button>;
// };

// export default MailBtn;

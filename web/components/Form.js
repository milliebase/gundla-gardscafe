//maby remove hidden input subject

import styled from "styled-components";
import Button from "../components/Button";

const StyledForm = styled.form`
  input {
    height: 50px;
  }
`;

export default class Form extends React.Component {
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
      <StyledForm
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
        {status === "SUCCESS" ? <p>Thanks!</p> : <Button text="skicka" />}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </StyledForm>
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

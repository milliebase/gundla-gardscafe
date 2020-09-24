//maby remove hidden input subject

import styled from "styled-components";
import Button from "../components/Button";

const StyledForm = styled.form`
  color: var(--gundla-paper);
  textarea,
  input {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    width: 100%;
    border: 1px solid #eeeeee;
    background-color: white;
    margin-bottom: 10px;
  }
  input {
    height: 44px;
  }
  textarea {
    width: 100%;
    height: 164px;
  }
  Button {
    margin: 0 auto;
    display: block;
    margin-bottom: 50px;
  }
  @media (min-width: 992px) {
    textarea {
      height: 129px;
    }
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
        {this.fields.map((field, i) => (
          <label key={i}>
            {field}
            <input type={field} name={field} />
          </label>
        ))}

        <label>
          Meddelande
          <textarea
            type="meddelande"
            name="meddelande"
            rows="4"
            cols="50"
          ></textarea>
        </label>

        {status === "SUCCESS" ? <p>Tack!</p> : <Button text="skicka" />}
        {status === "ERROR" && <p>Något gick fel.</p>}
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

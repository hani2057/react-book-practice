import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  })
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
        <h1>event practice</h1>
        <input 
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
        />
        <input 
        type="text"
        name="message"
        placeholder="placeholder"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>check</button>
      </div>
  )
}
export default EventPractice



//   const [username, setUsername] = useState('');
//   const [message, setMessage] = useState('');
//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + ': ' + message);
//     setUsername('');
//     setMessage('');
//   };
//   const onKeyPress = (e) =>{
//     if (e.key === 'Enter') {
//       onClick();
//     }
//   };
//   return (
//     <div>
//         <h1>event practice</h1>
//         <input 
//         type="text"
//         name="username"
//         placeholder="username"
//         value={username}
//         onChange={onChangeUsername}
//         />
//         <input 
//         type="text"
//         name="message"
//         placeholder="placeholder"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//         />
//         <button onClick={onClick}>check</button>
//       </div>
//   );
// };

// export default EventPractice;






// class EventPractice extends Component {

//   state ={
//     username: '',
//     message: '',
//   }

//   // constructor(props) {
//   //   super(props);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   handleClick = () => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   }

//   handleKeyPress = (e) => {
//     if(e.key === 'Enter') {
//       this.handleClick();
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>event practice</h1>
//         <input 
//         type="text"
//         name="username"
//         placeholder="username"
//         value={this.state.username}
//         onChange={this.handleChange}
//         />
//         <input 
//         type="text"
//         name="message"
//         placeholder="placeholder"
//         value={this.state.message}
//         onChange={this.handleChange}
//         onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>check</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;
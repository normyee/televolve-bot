export class HandleAuthError {

  execute(error) {
    switch (error.code) {
      case 'auth/user-not-found':
        alert('User not found');
        break;
      case 'auth/wrong-password':
        alert('Wrong password');
        break;
      case 'auth/email-already-in-use':
        alert('Email already in use');
        break;
      case 'auth/invalid-email':
        alert('Invalid email');
        break;
      case 'auth/operation-not-allowed':
        alert('Operation not allowed');
        break;
      case 'auth/weak-password':
        alert('Weak password');
        break;
      default:
        alert('Something went wrong');
    }
  }
}

export default new HandleAuthError()
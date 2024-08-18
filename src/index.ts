import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Chidi Anyanwu';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});

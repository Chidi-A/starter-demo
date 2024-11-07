import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Emmanuel Anyanwu';
  greetUser(name);
  document.body.style.backgroundColor = 'blue';
});

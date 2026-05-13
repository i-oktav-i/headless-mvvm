import { Container, Title, Button } from '@tokens';

const Card = ({ title, onClick, buttonText }) =&gt; {
  return (
    &lt;Container&gt;
      &lt;Title&gt;{title}&lt;/Title&gt;

      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;
    &lt;/Container&gt;
  );
};

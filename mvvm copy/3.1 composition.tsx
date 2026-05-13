const Card = ({ itemId }) =&gt; {
  const { title, onClick, buttonText } = useCardProps(itemId);

  return (
    &lt;Container&gt;
      &lt;Title&gt;{title}&lt;/Title&gt;

      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;
    &lt;/Container&gt;
  );
};

const Screen = () =&gt; {
  return (
    &lt;Container&gt;
      &lt;Card itemId={itemId} /&gt;
    &lt;/Container&gt;
  );
};

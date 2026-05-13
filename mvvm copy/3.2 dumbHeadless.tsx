const Card = ({ title, onClick, buttonText }) =&gt; {
  return (
    &lt;Container&gt;
      &lt;Title&gt;{title}&lt;/Title&gt;

      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;
    &lt;/Container&gt;
  );
};

const Screen = ({ cardProps }) =&gt; {
  return (
    &lt;Container&gt;
      &lt;Card {...cardProps} /&gt;
    &lt;/Container&gt;
  );
};

const ScreenDataProvider = () =&gt; {
  const cardProps = useCardProps();

  return &lt;Screen cardProps={cardProps} /&gt;;
};

const CardDataProvider = () =&gt; {
  const cardProps = useCardProps();

  return &lt;Card {...cardProps} /&gt;;
};

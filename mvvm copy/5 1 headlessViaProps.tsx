const HeadlessCard = ({
  title,
  onClick,
  buttonText,

  Container,
  Title,
  Button,
}) =&gt; {
  return (
    &lt;Container&gt;
      &lt;Title&gt;{title}&lt;/Title&gt;

      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;
    &lt;/Container&gt;
  );
};

const HeadlessScreen = ({ cardProps, Container, Card }) =&gt; {
  return (
    &lt;Container&gt;
      &lt;Card {...cardProps} /&gt;
    &lt;/Container&gt;
  );
};

const Card = ({ props }) =&gt; (
  &lt;HeadlessCard
    {...props}
    Container={CardContainer}
    Title={CardTitle}
    Button={CardButton}
  /&gt;
);

const Screen = (props) =&gt; (
  &lt;HeadlessScreen {...props} Card={Card} Container={ScreenContainer} /&gt;
);

const ScreenDataProvider = ({ ScreenLayout }) =&gt; {
  const cardProps = useCardProps();

  return &lt;ScreenLayout cardProps={cardProps} /&gt;;
};

const ScreenWidget = () =&gt; &lt;ScreenDataProvider ScreenLayout={Screen} /&gt;;

import {Container, LoaderIcon} from './styled';
import {Logo} from "@/kit/logo/styled.ts";

type LoaderProps = {
  small?: boolean;
};

export const Loader = (props: LoaderProps) => (
  <Container $small={props.small}>
    <LoaderIcon width='6rem' height='6rem'/>
    <Logo />
  </Container>
);

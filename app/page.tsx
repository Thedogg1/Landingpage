import { Container, Main, Section } from '@/components/craft';
import FeatureLeft from '@/components/feature-left';
import CTA from '@/components/home-page/cta';
import FeatureRight from '@/components/home-page/feature-right';
import FeatureSet from '@/components/home-page/feature-set';
import Footer from '@/components/home-page/footer';
import Hero from '@/components/home-page/hero';
const page = () => {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <FeatureLeft />
          <FeatureRight />
          <FeatureSet />
          <CTA />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
};

export default page;

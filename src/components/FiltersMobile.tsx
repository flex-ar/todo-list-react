import { FiltersContainerMobile, FooterText } from '../styled-components';

export const FiltersMobile = (props: {}) => {
  return (
    <div>
      <FiltersContainerMobile>
        <FooterText>All</FooterText>
        <FooterText>Active</FooterText>
        <FooterText>Completed</FooterText>
      </FiltersContainerMobile>
    </div>
  );
};

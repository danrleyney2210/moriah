import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 60px;
  width: 100%;
  text-align: center;

  h2 {
    margin-bottom: 24px;
    font-weight: 600;
    color: ${ props => props.theme.primary['800']};

  }

  .swiper-wrapper {
    .swiper-slide {

      /* background-color: ${ props => props.theme.primary['800']}; */
      background-color: #f1f2f3;
      border-radius: 16px;
      height: fit-content;
    }
  }

  .testimonials_container {
    width: 40%;
    padding-bottom: 4rem;
    /* margin-right: 0px; */

  .client_avatar {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid  ${ props => props.theme.primary['800'] };

  }

  .testimonial {
    /* background: ${ props => props.theme.primary['600']}; */
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;

    span {
      font-size: 12px;
    }

    .client_review {
      /* color: ${ props => props.theme.color_light}; */
      font-weight: 300;
      display: block;
      width: 80%;
      margin: 0.8rem auto 0;
    }
  }
  
  .swiper-pagination-clickable {
    .swiper-pagination-bullet {
      background-color: ${ props => props.theme.color_primary };
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    /* width: ${ props => props.theme.container_width_sm }; */
    .swiper-wrapper {
      .swiper-slide {
        /* padding: 0px; */
      }
    }


    .client_review {
      width: ${ props => props.theme.container_width_sm };
    }
  }
  }
`




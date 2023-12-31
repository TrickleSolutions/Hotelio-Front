import { ImageCarousel } from "./ImageCarousel";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { unstable_HistoryRouter } from "react-router-dom";

const Div = styled.div`
  display: flex;
  margin: 0;
  padding: 4% 0;
  border-bottom: 1px solid #e6e6e6;
`;

const ItemHead = styled.div`
  display: flex;
  height: auto;
`;

const LDiv = styled.div`
  width: 60%;
`;

const RDiv = styled.div`
  display: flex;
  width: 90%;
  padding: 1%;
  & div {
    flex: 2;
  }
`;

const RateDiv = styled.div`
  margin-left: 52px;
`;

const Alert = styled.p`
  color: #ee2e24;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.025em;
  text-align: left;
  flex: 0.5;
`;

const Head = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.005em;
  text-align: left;
  color: #424242;
`;

const Location = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 5px;
  letter-spacing: -0.005em;
  text-align: left;
  color: #424242;
`;

const Rating = styled.div`
  position: absolute;
  width: 46px;
  height: 20px;
  background: #5ecc37;
  border-radius: 2px;
  border-radius: 5%;
  color: #ffffff;
  padding: 0 0.3%;
  margin: 2px 0;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomDiv = styled.div`
  display: flex;
  margin-top: 3%;
  /* justify-self: end; */
  /* align-items: flex-end; */
  & Button[variant="contained"]:hover {
    background-color: #128037;
    /* justify-content: flex-end; */
  }
`;

const Span1 = styled.span`
  /* font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: -0.005em;
  text-align: left; */
  position: static;
  width: 65px;
  height: 31px;
  left: 0px;
  top: 0px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: -0.005em;

  /* Logo */

  color: #ee2e24;
  margin: 0px 4px;
`;

const Span2 = styled.span`
  /* font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.005em;
  text-align: left; */
  position: static;
  width: 47px;
  height: 19px;
  left: 74px;
  top: 6px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.005em;
  text-decoration-line: line-through;

  color: #636363;
  margin: 0px 4px;
`;

const Span3 = styled.span`
  /* font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: -0.005em;
  text-align: left; */
  position: static;
  width: 53px;
  height: 17px;
  left: 130px;
  top: 7px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin: 0px 4px;
  /* identical to box height */

  letter-spacing: -0.005em;

  /* Accent Yellow Dark */

  color: #d79a12;
`;

const TagDiv = styled.div`
  margin-bottom: 3%;
`;

const P1 = styled.p`
  width: 106px;
  height: 15px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 8px;
  /* identical to box height */

  letter-spacing: -0.005em;

  color: #636363;
`;

export const HotelInfo = ({ key, data }) => {
  const history = unstable_HistoryRouter();

  const handleViewDetails = () => {
    history.push(`/hoteldetail/${data.id}`);
  };

  const handleBookNow = () => {
    history.push(`/payment/${data.id}`);
  };
  return (
    <>
      <Div>
        <LDiv>
          <ImageCarousel key={key} data={data} />
        </LDiv>
        <RDiv>
          <Block>
            <ItemHead>
              <div>
                <Head>{data.name}</Head>
                <Location>{data.location}</Location>
              </div>
              <Alert>Vaccinated staff. RT-PCR report required</Alert>
            </ItemHead>
            <div>
              <Rating> {data.rating} ★</Rating> <span> </span>
              <RateDiv> (300 Ratings) . Good</RateDiv>
            </div>
            <div style={{ marginTop: "10px" }}>
              <img
                src="Images/Facilities.png"
                alt=""
                style={{ width: "auto", height: "20px" }}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <img
                src="Images/Qualities.png"
                alt=""
                style={{ width: "auto", height: "30px" }}
              />
            </div>
            {/* <TagDiv>
              <Button
                variant="outlined"
                style={{
                  color: "#424242",
                  borderColor: "#424242",
                  height: "70%",
                }}
              >
                Outlined
              </Button>
            </TagDiv> */}

            <BottomDiv>
              <div style={{ alignSelf: "flex-end" }}>
                <Span1>₹{data.price}</Span1>
                <Span2>₹{data.price * 3}</Span2>
                <Span3>66% off</Span3>
                <P1>per room per night</P1>
              </div>
              <Stack spacing={2} direction="row">
                <div style={{ justifySelf: "end" }}>
                  <Button
                    onClick={handleViewDetails}
                    variant="outlined"
                    style={{
                      color: "#424242",
                      borderColor: "#424242",
                      height: "70%",

                      // marginLeft: "40px",
                    }}
                  >
                    View Details
                  </Button>
                  <Button
                    onClick={handleBookNow}
                    variant="contained"
                    style={{
                      backgroundColor: "#df293a",
                      height: "70%",
                      marginLeft: "10px",
                      marginRight: 0,
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </Stack>
            </BottomDiv>
          </Block>
        </RDiv>
      </Div>
    </>
  );
};

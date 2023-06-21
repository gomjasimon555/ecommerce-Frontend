import { Box, Button, Card, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import "./productdetailcard.css";
import { styled } from "@mui/material/styles";
import PropTypes from 'prop-types';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty": {
    color: "black",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    padding: "8px 15px"
  },
  "& .MuiRating-iconFilled": {
    color: "white",
    backgroundColor: "black",
    borderRadius: "50px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    padding: "8px 15px"
  }
}));

const customIcons = {
  1: {
    icon: 7,
    label: "Small",
  },
  2: {
    icon: 8,
    label: "Medium",
  },
  3: {
    icon: 9,
    label: "Large",
  },
  4: {
    icon: 10,
    label: "XL",
  },
  5: {
    icon: 11,
    label: "XXL",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function ProductDetailCard(props) {

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={10}>
      <img
        src={props.product?.image}
        width="400px"
        style={{ borderRadius: 8 }}
      />
      <Card sx={{ maxWidth: "30%", height: "130%", borderRadius: 0 }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          p={8}
          height="80%"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Rating
              name="half-rating-read"
              defaultValue={props.product.rating?.rate}
              precision={0.5}
              size="large"
              readOnly
            />
            <Box display="flex">
              <Typography variant="h4" sx={{ paddingTop: "4px" }}>
                $
              </Typography>
              <Typography variant="h3">{ props.product.price }</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h3">{props.product.title}</Typography>
            <Typography variant="h5">{props.product.description}</Typography>
          </Box>
          <Box>
            <Typography variant="h5">SIZE</Typography>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
            />
          </Box>
          <Box>
            <Button variant="contained" fullWidth endIcon={<ShoppingBasketIcon />}>Add to Cart</Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default ProductDetailCard;
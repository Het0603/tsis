import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Avatar, Stack, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  contanier: {
    display: "flex",
    justifyContent: "center",
    // width: "auto",
  },
}));

const ButtonStyled = styled(Button)`
  position: absolute;
  // margin-top : 15;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  margin: auto;
  width: fit-content;
  border-radius: 50%;
  height: 40px;
  display: none;
`;

const ContainerStyled = styled("div")`

  // position: absolute;
  // top: 15px;
  
  &:hover {
    .test-button {
      display: block;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(.jpg);
      height : 169px;
      width : 250px
    }
  }  
}`;

const PhotoUpload = ({
  onChange,
  photo,
  setFieldValue,
  titleText,
  title,
  fieldName,
}) => {
  const classes = useStyles();

  const [postImage, setPostImage] = useState({
    myFile: "",
    images: "",
  });
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    onChange(e);
    const file = e.target.files[0];

    const base64 = await convertToBase64(file);

    setPostImage({ ...postImage, myFile: base64, images: base64 });
  };

  const handleRemoveImage = async (e) => {
    setFieldValue(fieldName, null);
  };

  return (
    <>
      {!postImage.images && !photo ? (
        <div className={classes.contanier}>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              // marginTop: "25px",
              // position: "relative",
            }}
          >
            <Avatar
              sx={{
                height: 150,
                width: 150,
              }}
              src={postImage.myFile || photo}
              alt="profile-img"
            >
              <Button
                component="label"
                size={"lg"}
                style={{
                  height: "200px",
                  width: "200px",
                }}
                sx={{
                  zIndex: 111,
                }}
                variant={"plain"}
              >
                {/* Add Image */}

                <AddAPhotoIcon
                  sx={{
                    color: "#212121",
                  }}
                />

                <input
                  sx={{
                    position: "absolute",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#ecefff !important",
                    border: "none",
                    color: "#3c467f",
                    display: "none",
                  }}
                  hidden
                  onChange={(e) => {
                    // onChange(e);
                    handleFileUpload(e);
                  }}
                  type="file"
                  accept="image/*"
                />
              </Button>
            </Avatar>
          </Stack>
        </div>
      ) : (
        <div className={classes.contanier}>
          <ContainerStyled>
            <Avatar
              sx={{
                height: 150,
                width: 150,
              }}
              src={postImage.myFile || photo}
              alt="profile-img"
            ></Avatar>
            <ButtonStyled
              component="label"
              size={"lg"}
              style={{
                height: "150px",
                width: "150px",
                // border: "2px dotted #808080",
                // backgroundColor: "white",
                marginTop: "-150px",
              }}
              sx={{
                zIndex: 111,
              }}
              variant="contained"
              className="test-button"
            >
              <Stack
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                spacing={1}
                mt={3}
              >
                {postImage.images || photo ? (
                  <>
                    <Button
                      component="label"
                      size={"sm"}
                      onClick={(e) => {
                        setPostImage({
                          myFile: "",
                          images: "",
                        });
                        handleRemoveImage(e);
                      }}
                      variant="plain"
                      sx={{
                        zIndex: 111,
                        border: "1px solid white",
                        borderRadius: "10px",
                        // backgroundColor: "#808080",
                        color: "white",
                        fontSize: "10px",
                      }}

                      // variant={"solid"}
                    >
                      Remove Image
                    </Button>
                  </>
                ) : (
                  <></>
                )}
                {/* <LibraryAddIcon
                  sx={{
                    fontSize: "40px",
                    padding: 1,
                    color: "#808080",
                  }}
                /> */}
                <div
                  style={{
                    border: "1px solid white",
                    padding: 7,
                    // height: 30,
                    width: 100,
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    fontSize={10}
                    fontWeight={"bold"}
                    sx={{
                      color: "white",
                    }}
                  >
                    Browse File
                  </Typography>
                </div>
              </Stack>

              <input
                sx={{
                  position: "absolute",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#ecefff !important",
                  border: "none",
                  color: "#3c467f",
                  display: "none",
                }}
                hidden
                onChange={(e) => {
                  // onChange(e);
                  handleFileUpload(e);
                }}
                type="file"
                accept="image/*"
              />
            </ButtonStyled>
          </ContainerStyled>
        </div>
      )}
      <Stack direction={"row"} justifyContent={"center"} mt={2} mb={2}>
        <Typography
          fontSize={15}
          variant="body2"
          sx={{
            color: `var(--school-gray, #8D8D8D)`,
          }}
        >
          {title}
        </Typography>
      </Stack>
    </>
  );
};

export default PhotoUpload;

import Delete from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  Typography,
  useTheme,
} from "@mui/material";
import myColors from "../../components/color";

const MenuNotification = ({
  handleClose,
  open,
  anchorEl,
}: {
  handleClose: () => void;
  open: boolean;
  anchorEl: HTMLElement | null;
}) => {
  const theme = useTheme();
  const { btnColor, btnColorHover, btnTextColor } = myColors(
    theme.palette.mode
  );
  return (
    <Menu
      id="long-menu"
      MenuListProps={{
        "aria-labelledby": "long-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={{
        margin: 0,
        ul: {
          background: `${theme.palette.background.paper} !important`,
        },
        ".css-6hp17o-MuiList-root-MuiMenu-list": {
          border: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {[
          {
            id: "1",
            title: "User Name",
            order:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum ipsam placeat cupiditate voluptas",
          },
          {
            id: "2",
            title: "User Name",
            order:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum ipsam placeat cupiditate voluptas",
          },
        ].map((option) => (
          <Box key={option.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                ":hover": {
                  backgroundColor: btnColorHover,
                  cursor: "pointer",
                },
              }}
            >
              <Box>
                <ListItem>
                  <ListItemText
                    primary={option.title}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                    }}
                    secondary={
                      <>
                        <Typography sx={{ display: "inline" }} component="span">
                          {option.order}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              </Box>
              <IconButton sx={{ margin: 0 }}>
                <Delete sx={{ margin: 0, color: "#F44336" }} />
              </IconButton>
            </Box>
            <Divider variant="fullWidth" />
          </Box>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          width: "100%",
          padding: "10px",
          gap: "10px",
        }}
      >
        <Button
          sx={{
            backgroundColor: btnColor,
            color: btnTextColor,
            flex: 1,
            ":hover": {
              backgroundColor: btnColorHover,
            },
          }}
        >
          See All
        </Button>
        <Button
          sx={{
            backgroundColor: "#F44336",
            color: "white",
            flex: 1,
            ":hover": {
              backgroundColor: "#D32F2F",
            },
          }}
        >
          Delete All
        </Button>
      </Box>
    </Menu>
  );
};
export default MenuNotification;

{
  /* <Box
            sx={{
              //   display: "flex",
              //   justifyContent: "space-between",
              alignItems: "flex-end",
              width: "300px",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "5px",
              }}
            >
              <Typography variant="h4">{option.title}</Typography>
              <p style={{ margin: 0 }}>{option.order}</p>
            </Box>
            <IconButton sx={{ margin: 0 }}>
              <Delete sx={{ margin: 0, color: "red" }} />
            </IconButton>
          </Box> */
}

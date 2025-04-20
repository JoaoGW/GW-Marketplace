import { ReactNode, useState } from "react";

import { 
  AlertDialog, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogFooter, 
  AlertDialogBody, 
  AlertDialogBackdrop,
  Button,
  ButtonText,
  Heading,
  Text
} from "@gluestack-ui/themed";

import { useAuth } from "@contexts/manager.routes";

import { useNavigation } from "@react-navigation/native";
import { NoAuthNavigationProp } from "@routes/noauth.routes";

export function QuitApp({children}: {children: ReactNode}) {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(false);

  const { logout } = useAuth();
  

  return (
    <>
      <Button variant="link" onPress={ () => setShowAlertDialog(true) } >
        { children }
      </Button>

      <AlertDialog
        isOpen={showAlertDialog}
        onClose={handleClose}
        size="md"
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading fontWeight={"$bold"} size="md">
              Voce tem certeza que deseja sair?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody mt={3} mb={4}>
            <Text size="sm">
              Esta ação fará com que você precise logar novamente
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button bgColor="$red500" size="sm" ml={15} onPress={ () => { handleClose; logout(); }}>
              <ButtonText>Sair</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
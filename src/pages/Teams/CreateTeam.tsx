import { IonItem, IonButton, IonInput } from "@ionic/react";
import React, { useState } from "react";
import { useAuth } from "../../firebase/authProvider";
import { useDispatch } from "react-redux";
import { createTeam } from "../../store/effects/Teams";

const CreateTeam: React.FC = () => {
  const [newTeam, setNewTeam] = useState<string>("");
  const dispatch = useDispatch();
  const { user } = useAuth();

  const createNewTeam = (e: React.MouseEvent) => {
    e.preventDefault();
    if (newTeam !== "") {
      user &&
        dispatch(
          createTeam({
            name: newTeam,
            members: [user.uid],
            id: "",
          })
        );
      setNewTeam("");
    }
  };

  return (
    <IonItem>
      <IonInput
        type="text"
        value={newTeam}
        placeholder="Enter new team name..."
        onIonChange={(e) => setNewTeam(e.detail.value!)}
      ></IonInput>
      <IonButton onClick={createNewTeam}>Add</IonButton>
    </IonItem>
  );
};

export default CreateTeam;

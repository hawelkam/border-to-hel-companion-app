import { IonItem, IonButton, IonInput } from "@ionic/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTeam } from "../../store/effects/Teams";
import { AppState } from "../../store/store";

const CreateTeam: React.FC = () => {
  const [newTeam, setNewTeam] = useState<string>("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state: AppState) => state.user);

  const createNewTeam = (e: React.MouseEvent) => {
    e.preventDefault();
    if (newTeam !== "") {
      dispatch(
        createTeam({
          name: newTeam,
          members: [currentUser.user!.id!],
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

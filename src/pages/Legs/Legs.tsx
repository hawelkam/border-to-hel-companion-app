// import {
//   IonContent,
//   IonHeader,
//   IonList,
//   IonPage,
//   IonTitle,
//   IonToolbar,
//   IonItem,
//   IonLabel,
//   IonButton,
// } from "@ionic/react";
// import React, { useEffect } from "react";
// import { useAuth } from "../../firebase/authProvider";
// import { AppState } from "../../store/store";
// import { useDispatch, useSelector } from "react-redux";
// import { getLegs } from "../../store/effects/Legs";
// import { Leg } from "../../store/interfaces/Leg";

// const Legs: React.FC = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

//   //   useEffect(() => {
//   //     dispatch(getLegs());
//   //   }, [dispatch]);
//   //   const teams = useSelector((state: AppState) => state.teams);

//   //   const handleJoin = (event: React.MouseEvent, id: string): void => {
//   //     user && dispatch(joinTeam(id, user.uid));
//   //   };

//   //   const handleLeave = (event: React.MouseEvent, id: string): void => {
//   //     user && dispatch(leaveTeam(id, user.uid));
//   //   };

//   //   const checkIfUserInTeam = (team: Team): boolean =>
//   //     user ? team.members.includes(user.uid) : false;

//   console.log(teams);

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Teams</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Teams</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonList>
//           {teams.teams &&
//             teams.teams.map((team) => (
//               <IonItem key={team.id}>
//                 <IonLabel>
//                   <h2>{team.name}</h2>
//                   <p>{team.members.length} members</p>
//                 </IonLabel>
//                 {!checkIfUserInTeam(team) && (
//                   <IonButton
//                     color="success"
//                     onClick={(event: React.MouseEvent) => {
//                       handleJoin(event, team.id);
//                     }}
//                   >
//                     Join
//                   </IonButton>
//                 )}
//                 {checkIfUserInTeam(team) && (
//                   <IonButton
//                     color="danger"
//                     onClick={(event: React.MouseEvent) => {
//                       handleLeave(event, team.id);
//                     }}
//                   >
//                     Leave
//                   </IonButton>
//                 )}
//               </IonItem>
//             ))}
//         </IonList>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Legs;
export {};

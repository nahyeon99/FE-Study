// 자손 선택자를 만들어서 자손에서 UserInfo를 사용하는 것이 목표입니다

import { useContext, createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return <HelloLicat />;
};

// const HelloLicat = () => {
//   return (
//     <UserInfo.Consumer>
//       {(value) => (
//         <div>
//           <input type="text" />
//           <h2>{value.name}</h2>
//           <strong>{`@ ${value.id}`}</strong>
//         </div>
//       )}
//     </UserInfo.Consumer>
//   );
// };

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
      <HelloLicatTwo />
    </div>
  );
};

const HelloLicatTwo = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  );
};

export default App;

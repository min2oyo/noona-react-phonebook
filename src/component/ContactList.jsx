import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {

  // 변수
  const contactList = useSelector(state => state.contactList);  // 연락처 목록

  // 출력
  return (
    <>
      <SearchBox />
      {contactList.map(item => (
        <ContactItem item={item} />
      ))}
    </>
  );

};

export default ContactList;
import * as S from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";

export const Nav = () => {
  const [activeNow, setActiveNow] = useState("#");

  return (
    <S.Wrapper>
      <S.Link
        isActive={activeNow == "#" ? true : false}
        onClick={() => setActiveNow("#")}
        href="#"
      >
        <AiOutlineHome />
      </S.Link>

      <S.Link
        isActive={activeNow == "#services" ? true : false}
        onClick={() => setActiveNow("#services")}
        href="#services"
      >
        <MdCleaningServices />
      </S.Link>


      <S.Link
        isActive={activeNow == "#about" ? true : false}
        onClick={() => setActiveNow("#about")}
        href="#about"
      >
        <AiOutlineUser />
      </S.Link>


      <S.Link
        isActive={activeNow == "#testimonials" ? true : false}
        onClick={() => setActiveNow("#testimonials")}
        href="#testimonials"
      >
        <LuMessagesSquare />
      </S.Link>
      <S.Link
        isActive={activeNow == "#contact" ? true : false}
        onClick={() => setActiveNow("#contact")}
        href="#contact"
      >
        <AiOutlinePhone />
      </S.Link>
    </S.Wrapper>
  );
};

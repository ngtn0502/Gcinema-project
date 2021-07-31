import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';

const trailerModalVariants = {
  hidden: {
    opacity: 0,
    y: 600,
    x: -400,
  },
  visible: {
    opacity: 1,
    y: -300,
    x: -400,
    transition: {
      duration: 0.7,
    },
  },
};
function Modal({ trailer }) {
  const dispatch = useDispatch();
  const keydownHadler = (event) => {
    if (event.keyCode === 27) {
      dispatch({ type: CLOSE_MODAL });
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', keydownHadler);
  }, []);
  return (
    <Wrapper>
      <motion.div
        variants={trailerModalVariants}
        initial="hidden"
        animate="visible"
        layout
        className="modal"
      >
        <AiOutlineCloseCircle
          className="modal__close"
          onClick={() => {
            dispatch({ type: CLOSE_MODAL });
          }}
        />
        <iframe
          id="ytplayer"
          title="youtube"
          type="text/html"
          src={trailer}
          frameBorder="0"
        />
      </motion.div>
    </Wrapper>
  );
}

export default Modal;

const Wrapper = styled.div`
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    .modal__close {
      position: absolute;
      top: -2rem;
      right: -2rem;
    }
  }
  iframe {
    border: 4px solid var(--color-white);
    width: 300px;
    height: 250px;
  }
  svg {
    width: 3rem;
    height: 3rem;
    fill: var(--color-white);
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    iframe {
      width: 740px;
      height: 490px;
    }
    .modal__close {
      top: -2.5rem;
      right: -2.5rem;
    }
    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaFacebookSquare } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  converDate,
  randomDuration,
  randomNumber,
} from '../../../utils/helper.js';
import imdbLogo from '../../../../assets/img/imdb-logo.png';
import { FlexHCenter, FlexVCenter } from '../../../utils/mixin';
import ButtonMovie from './ButtonMovie.js';
import MovieClass from '../Home.component/MovieClass';
import { movieDetailContent } from '../../../utils/constants';
import { SHOW_MODAL } from '../../../redux/actions/constantsAction';

function MovieInfor({ movieDetail, movie }) {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="section-middle">
        <div className="movieInfor__top">
          <img src={movie.hinhAnh} alt="" className="movieInfor__banner" />
          <ButtonMovie
            className="movieInfor__booking"
            onClick={() => {
              dispatch({ type: SHOW_MODAL, payload: movie.trailer });
            }}
          >
            <FaPlay />
            <span>Xem trailer</span>
          </ButtonMovie>
        </div>
        <div className="movieInfor__bottom">
          <h5 className="title"> {movieDetail.tenPhim} (2020)</h5>
          <p className="subtitle__meta">
            <MovieClass />
            {randomDuration()} phút
          </p>
          <div className="subtitle__imdb">
            <img src={imdbLogo} alt="" />
            <span className="subtitle__meta">{randomNumber()} ++</span>
          </div>
          {/*  */}
          <div className="movieInfor__sharing">
            <div className="movieInfor__sharing--btn">
              <ButtonMovie className="btn__save">+ Đặt vé</ButtonMovie>
            </div>
            <div className="movieInfor__sharing--btn ">
              <ButtonMovie>
                <FaFacebookSquare />
                Chia sẻ
              </ButtonMovie>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="movieInfor__detail">
            {movieDetailContent.map((item, index) => (
              <p className="movieInfor__detail--item" key={index}>
                <span className="subtitle">{item.title}</span>
                <span className="subtitle__detail">{item.content}</span>
              </p>
            ))}
            <p className="movieInfor__detail--item">
              <span className="subtitle">Ngày công chiếu: </span>
              <span className="subtitle__detail">
                {converDate(movieDetail.ngayKhoiChieu)}
              </span>
            </p>
            <p className="movieInfor__detail--item">
              <span className="subtitle">Nội dung: </span>
            </p>
            <p className="subtitle__detail--content">{movie.moTa}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MovieInfor;

const Wrapper = styled.section`
  position: relative;
  margin-top: 2rem;
  /* banner */
  .movieInfor__banner {
    width: 80%;
    height: 80%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .movieInfor__booking {
    width: 100%;
    svg {
      margin-right: 1rem;
    }
  }
  /* title */
  .subtitle__imdb {
    ${FlexHCenter()}
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
    span {
      font-size: 1rem;
    }
  }
  .subtitle__meta {
    color: var(--color-white);
    letter-spacing: var(--spacing);
  }
  .subtitle {
    color: var(--color-title);
    letter-spacing: var(--spacing);
  }
  .title {
    font-size: 2rem;
    padding: 0.5rem 0;
  }
  .subtitle__detail {
    font-size: 1rem;
    color: var(--color-white);
  }
  .movieInfor__detail {
    margin-top: 2rem;
    .movieInfor__detail--item {
      margin-top: 1rem;

      display: grid;
      grid-template-columns: 200px 1fr;
    }
    .subtitle__detail--content {
      font-size: 1rem;
      color: var(--color-sub);
      padding: 0.5rem 0;
    }
  }
  /* sharing btn */

  .movieInfor__sharing {
    .movieInfor__sharing--btn {
      ${FlexVCenter()}
      font-size: 0.75rem;
      svg {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }
      button {
        background-color: var(--color-facebook);
        padding: 0.5rem 1rem;
        text-transform: none;
        &:hover {
          background-color: rgb(35, 84, 161, 0.5);
        }
      }
      .btn__save {
        background-color: #3ec46d;
        margin: 1rem 0;
        &:hover {
          background-color: rgba(63, 190, 107, 0.5);
        }
      }
    }
  }
  @media screen and (min-width: 700px) {
    margin-top: -10rem;
    z-index: 130;
    .section-middle {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 2rem;
    }
    .title {
      font-size: 3rem;
    }
    .subtitle {
      font-size: 1.25rem;
    }
    /* sharing bntn */
    .movieInfor__sharing {
      display: flex;
      margin-top: 1rem;
      .movieInfor__sharing--btn {
        button {
          font-size: 1.25rem;
        }
        .btn__save {
          margin: 0;
          margin-right: 1rem;
        }
      }
    }
    .movieInfor__booking {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

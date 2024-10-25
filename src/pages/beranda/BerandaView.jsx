import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const BerandaView = ({ Populer, topRated, upcoming, NowPlaying }) => {
  try {
    return (
      <div className="bg-zinc-300 shadow-xl dark:bg-slate-900">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="w-full">
            <div className="slide-content"></div>
            <img
              src="https://image.tmdb.org/t/p/original/c1aBrG5s5xFa6Tbnihu2Hhj4t2q.jpg"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full">
            <img
              src="https://image.tmdb.org/t/p/original/417tYZ4XUyJrtyZXj7HpvWf1E8f.jpg"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full">
            <img
              src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full">
            <img
              src="https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full">
            <img
              src="https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full">
            <img
              src="https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full">
            <img
              src="https://image.tmdb.org/t/p/original/dqK9Hag1054tghRQSqLSfrkvQnA.jpg"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full">
            <img
              src="https://image.tmdb.org/t/p/original/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full">
            <img
              src="https://image.tmdb.org/t/p/original/78CquSA0GN0m7NIYnNECx91KFkJ.jpg"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

        
        </Swiper>
        <br />

        <h2 className="font-bold text-3xl p-4 dark:text-white"> Populer </h2>
        <div className="Card flex w-full overflow-x-auto">
          {Populer?.map((item, index) => (
            <Link to={"/Detail/" + item.id} key={index}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={"https://image.tmdb.org/t/p/original" + item.poster_path}
              />
            </Link>
          ))}
        </div>

        <h2 className="font-bold text-3xl p-4 dark:text-white">Top Rated</h2>
        <div className="Card flex w-full overflow-x-auto">
          {topRated?.map((item, index) => (
            <Link to={"/Detail/" + item.id} key={index}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={"https://image.tmdb.org/t/p/original" + item.poster_path}
              />
            </Link>
          ))}
        </div>

        <h2 className="font-bold text-3xl p-4 dark:text-white">Now Playing</h2>

        <div className="Card flex w-full overflow-x-auto">
          {NowPlaying?.map((item, index) => (
            <Link to={"/Detail/" + item.id} key={index}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={"https://image.tmdb.org/t/p/original" + item.poster_path}
              />
            </Link>
          ))}
        </div>

        <h2 className="font-bold text-3xl p-4 dark:text-white">Up comming</h2>
        <div className="Card flex w-full overflow-x-auto">
          {upcoming?.map((item, index) => (
            <Link to={"/Detail/" + item.id} key={index}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={"https://image.tmdb.org/t/p/original" + item.poster_path}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default BerandaView;

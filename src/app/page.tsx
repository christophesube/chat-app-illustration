import Image from "next/image";
import avatar from "../../public/images/avatar.jpg";
import menu from "../../public/images/ellipsis-vertical-solid.svg";
import chevron from "../../public/images/chevron-right-solid.svg";
import circle from "../../public/images/circle-regular.svg";
import dog1 from "../../public/images/dog-image-1.jpg";
import dog2 from "../../public/images/dog-image-2.jpg";
import dog3 from "../../public/images/dog-image-3.jpg";

export default function Home() {
  return (
    <div className='backgroundContainer'>
      <div className='container'>
        <div className='topWhiteBlock'></div>
        <header>
          <div className='containerHeaderLeft'>
            <Image
              className='avatar'
              alt=''
              width={40}
              height={40}
              src={avatar}
            />
            <div className='headerNamesBlock'>
              <p className='name'>Samuel Green</p>
              <p className='status'>Available to Walk</p>
            </div>
          </div>
          <Image alt='menu' width={15} height={15} src={menu} />
        </header>
        <main>
          <div className='messagesleftContainer'>
            <p className='messageLeft'>
              That sounds great. I'd be happy with that
            </p>
            <p className='messageLeft'>
              Could you send over some pictures of your dog. please ?
            </p>
          </div>
          <div className='messagesRightContainer'>
            <div className='dogPicturesContent'>
              <Image className='dogPictures' alt='dog' src={dog1} height={70} />
              <Image className='dogPictures' alt='dog' src={dog2} height={70} />
              <Image className='dogPictures' alt='dog' src={dog3} height={70} />
            </div>
            <p className='messageRight'>
              Here are a few pictures. She's a happy girl!
            </p>
            <p className='messageRight'>Can you make it ?</p>
          </div>
          <p className='messageLeft'>
            She looks so happy! The time we discussed works. how long shall I
            take her out for ?
          </p>
          <div className='secondMessageLeft'>
            <div className='activityMessage'>
              <Image alt='circle' src={circle} height={20} />
              <p>30 minutes walk</p>
            </div>
            <p className='price'>$29</p>
          </div>
          <div className='secondMessageLeft'>
            <div className='activityMessage'>
              <Image alt='circle' src={circle} height={20} />
              <p>1 hour walk</p>
            </div>
            <p className='price'>$29</p>
          </div>
        </main>
        <footer>
          <input placeholder='Type a message...' type='text' />
          <button>
            <Image alt='button' src={chevron} height={18} />
          </button>
        </footer>
      </div>
    </div>
  );
}

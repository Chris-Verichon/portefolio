import './style.scss';
import accueil from 'src/assets/images/accueil.gif';

function Bio() {
  return (
    <div id="bio" className="bio">
      <h1 className="bio-title"><a className="bio-title-lien" href="#home"> <img className="bio-title-img" src={accueil} alt="logo accueil" /></a># Bio</h1>
      <h2 className="bio-subtitle">Qui suis-je ?</h2>
      <p className="bio-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, nemo eos aut dolores in hic consequuntur accusamus. Explicabo placeat repellat porro ipsum, ullam ducimus, sit officia odio quia voluptatum vero modi. Magnam illum similique veniam ipsam sint facilis nulla modi. Esse tenetur obcaecati eligendi nisi quidem voluptatem, harum corrupti voluptatum facere mollitia nihil a nulla laboriosam hic quae minus autem optio quia amet reiciendis, ratione eius corporis in deserunt. Saepe magni velit odio unde, harum molestias quas sequi commodi? Reiciendis eligendi, voluptates illo fugit facilis fuga similique praesentium nulla non nihil provident labore dolorum corrupti veniam rem. Iste, voluptas fugit!</p>
      <h2 className="bio-subtitle">Mes passions</h2>
      <p className="bio-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, nemo eos aut dolores in hic consequuntur accusamus. Explicabo placeat repellat porro ipsum, ullam ducimus, sit officia odio quia voluptatum vero modi. Magnam illum similique veniam ipsam sint facilis nulla modi. Esse tenetur obcaecati eligendi nisi quidem voluptatem, harum corrupti voluptatum facere mollitia nihil a nulla laboriosam hic quae minus autem optio quia amet reiciendis, ratione eius corporis in deserunt. Saepe magni velit odio unde, harum molestias quas sequi commodi? Reiciendis eligendi, voluptates illo fugit facilis fuga similique praesentium nulla non nihil provident labore dolorum corrupti veniam rem. Iste, voluptas fugit!</p>
    </div>
  );
}

export default Bio;
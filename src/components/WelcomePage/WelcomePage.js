import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WelcomePage() { 
    return (
    <Container fluid="md" className='welcome-container'>
      <Row>
        <Col>
        <h2>
          The Greatest Brunch In Town! 
          </h2>
          </Col>
      </Row>
      <Row>
        <p>
        Brunch is a long-standing Southern tradition, whether you're celebrating on Mother's Day, using the meal as an excuse to catch up with your girlfriends, or have made pancakes at noon a post-church family tradition. But where did the meal come from?

A clever wordsmith first pushed the words "breakfast" and "lunch" together to create the word "brunch" way back in 1895. In Hunter's Weekly, British author Guy Beringer made the case that post-church Sunday meals shouldn't be long, multi-course meals of heavy meats and cheeses, but instead lighter fare served late in the morning. ″Brunch is cheerful, sociable and inciting,"⁣ Beringer wrote. ″⁣It is talk-compelling. It puts you in a good temper, it makes you satisfied with yourself and your fellow beings, it sweeps away the worries and cobwebs of the week.″⁣

While Beringer may have coined the word "brunch" he didn't come up with the meal itself. The meal's exact origins are a bit murky, but food historians think that the meal came about thanks to either of the South's favorite pastimes—hunting or church-going. Some historians think brunch started thanks to the pre-hunt breakfasts that were common in England. Those were traditionally lavish meals with both sweet and savory options for every palate. Modern brunch staples like eggs, bacon, fresh fruit and sweets were all common at these gatherings. Other food historians think that Sunday brunch started thanks to Catholics who would fast before mass and then eat a large lunch after church. Another group of historians think brunch really got going in the Big Apple. From the early days, dining spots across New York served up now-classic brunch dishes like eggs Benedict and bagels and lox turning breakfast lovers into brunch fanatics.
        </p>
      </Row>
      <Row>
        <h2>Go check out some of are delicious entrees!</h2>
      </Row>
    </Container>
        
    );
  }



  export default WelcomePage;
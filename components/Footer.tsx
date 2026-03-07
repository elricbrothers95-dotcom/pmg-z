export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{
        background: 'linear-gradient(135deg, #1B45B4 0%, #0D1A7A 100%)',
        paddingTop: '87px',
        paddingBottom: '138px'
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', paddingLeft: '75px', paddingRight: '10px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '151px 242px 238px 294px 302px',
            gap: '32px'
          }}
        >
          {/* Logo Column */}
          <div>
            <img src="/pmg-logo-footer.png" alt="PMG" style={{ width: '151px', height: '145px' }} />
          </div>

          {/* What we Do Column */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: '25px', lineHeight: '100%' }}
            >
              What we Do
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Our Services</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Our Solutions</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Rebuilding from within</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Why Consulting?</a></li>
            </ul>
          </div>

          {/* Our Content + Working with PMG Column */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: '25px', lineHeight: '100%' }}
            >
              Our Content
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>FAQs</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Insights &amp; Innovations</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Community Programs</a></li>
            </ul>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: '25px', lineHeight: '100%', marginTop: '22px' }}
            >
              Working with PMG
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Careers</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Licensing</a></li>
            </ul>
          </div>

          {/* Our Models Column */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: '25px', lineHeight: '100%' }}
            >
              Our Models
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Sector Convergence Model</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>I-O Enterprise Architecture</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Bussiness Value-Unit Model</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Trade Gothic LT Std', sans-serif", fontSize: '25px', lineHeight: '100%' }}
            >
              Legal
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Privacy &amp; Cookie Policy</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Hiring &amp; Equal Opportunity</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>AI &amp; Data Ethics Statement</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Anti-Modern Slavery Policy</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Intellectual Property</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Regionalization Policy</a></li>
              <li><a href="#" className="text-white font-montserrat font-medium opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '20px', lineHeight: 'normal', display: 'block' }}>Digital Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

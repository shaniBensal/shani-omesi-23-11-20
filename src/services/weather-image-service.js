  
import img1 from '../assets/images/01-s.png';
import img2 from '../assets/images/02-s.png';
import img3 from '../assets/images/03-s.png';
import img4 from '../assets/images/04-s.png';
import img5 from '../assets/images/05-s.png';
import img6 from '../assets/images/06-s.png';
import img7 from '../assets/images/07-s.png';
import img8 from '../assets/images/08-s.png';
import img11 from '../assets/images/11-s.png';
import img12 from '../assets/images/12-s.png';
import img13 from '../assets/images/13-s.png';
import img14 from '../assets/images/14-s.png';
import img15 from '../assets/images/15-s.png';
import img16 from '../assets/images/16-s.png';
import img17 from '../assets/images/17-s.png';
import img18 from '../assets/images/18-s.png';
import img19 from '../assets/images/19-s.png';
import img20 from '../assets/images/20-s.png';
import img21 from '../assets/images/21-s.png';
import img22 from '../assets/images/22-s.png';
import img23 from '../assets/images/23-s.png';
import img24 from '../assets/images/24-s.png';
import img25 from '../assets/images/25-s.png';
import img26 from '../assets/images/26-s.png';
import img29 from '../assets/images/29-s.png';
import img30 from '../assets/images/30-s.png';
import img31 from '../assets/images/31-s.png';
import img32 from '../assets/images/32-s.png';
import img33 from '../assets/images/33-s.png';
import img34 from '../assets/images/33-s.png';
import img35 from '../assets/images/35-s.png';
import img36 from '../assets/images/36-s.png';
import img37 from '../assets/images/37-s.png';
import img38 from '../assets/images/38-s.png';
import img39 from '../assets/images/39-s.png';
import img40 from '../assets/images/40-s.png';
import img41 from '../assets/images/41-s.png';
import img42 from '../assets/images/42-s.png';
import img43 from '../assets/images/43-s.png';
import img44 from '../assets/images/44-s.png';

export const iconsMap = [{
  id: 1,
  icon: img1
}, {
  id: 2,
  icon: img2
}, {
  id: 3,
  icon: img3
}, {
  id: 4,
  icon: img4
}, {
  id: 5,
  icon: img5
}, {
  id: 6,
  icon: img6
}, {
  id: 7,
  icon: img7
}, {
  id: 8,
  icon: img8
}, {
  id: 11,
  icon: img11
}, {
  id: 12,
  icon: img12
}, {
  id: 13,
  icon: img13
}, {
  id: 14,
  icon: img14
}, {
  id: 15,
  icon: img15
}, {
  id: 16,
  icon: img16
}, {
  id: 17,
  icon: img17
}, {
  id: 18,
  icon: img18
}, {
  id: 19,
  icon: img19
}, {
  id: 20,
  icon: img20
}, {
  id: 21,
  icon: img21
}, {
  id: 22,
  icon: img22
}, {
  id: 23,
  icon: img23
}, {
  id: 24,
  icon: img24
}, {
  id: 25,
  icon: img25
}, {
  id: 26,
  icon: img26
}, {
  id: 29,
  icon: img29
}, {
  id: 30,
  icon: img30
}
, {
  id: 31,
  icon: img31
}, {
  id: 32,
  icon: img32
}, {
  id: 33,
  icon: img33
},
{
  id: 34,
  icon: img34
},
{
  id: 35,
  icon: img35
}, {
  id: 36,
  icon: img36
}, {
  id: 37,
  icon: img37
}, {
  id: 38,
  icon: img38
}, {
  id: 39,
  icon: img39
}, {
  id: 40,
  icon: img40
}, {
  id: 41,
  icon: img41
}, {
  id: 42,
  icon: img42
}, {
  id: 43,
  icon: img43
}, {
  id: 44,
  icon: img44
}
];

export default (
  iconId
) => {
 const icon = iconsMap.find(icon => icon.id === iconId);
 return icon.icon || iconsMap[0].icon;
}
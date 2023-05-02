[t, r = t, b = t, l = r] = '10px 20px 30px 40px'.split(' ');
// - top = '10px' - right = '20px' - bottom = '30px' - left = '40px'
[t, r = t, b = t, l = r] = '10px 20px'.split(' ');
// - top = '10px' - right = '20px' - bottom = top ('10px') - left = right ('20px')
[t, r = t, b = t, l = r] = '10px'.split(' ');
// - top = '10px' - right = '20px' - bottom = '30px' - left = '40px'
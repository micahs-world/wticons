import * as React from 'react';
import { SVGProps } from 'react';
const SvgPostcss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      d="M255.902 121.097c-.086-3.284-.259-6.654-.432-9.938-.173-3.371-.259-6.741-.605-10.111-.605-4.581-1.21-9.247-2.247-13.741-.778-3.716-2.074-7.259-3.37-10.802-1.642-4.149-3.284-8.383-5.358-12.358-3.371-6.395-7.778-12.099-11.84-18.062-2.679-3.803-6.135-6.914-8.728-10.802-1.469-2.247-3.63-4.149-5.79-5.877-3.457-2.765-7.087-5.272-10.716-7.691-2.766-1.902-5.531-3.716-8.469-5.358-2.334-1.297-4.84-2.334-7.26-3.457-2.765-1.297-5.444-2.852-8.555-3.457-.778-.173-1.469-.432-2.247-.691-1.988-.692-3.889-1.469-5.877-2.074-3.024-.951-5.962-2.075-9.074-2.852-3.024-.778-6.135-1.297-9.246-1.729-3.457-.518-7-.691-10.457-1.037-2.247-.259-4.494-.518-6.655-.605-3.283-.172-6.654-.172-9.938-.259-1.642-.086-3.37-.259-5.012-.173-2.506.087-5.012.346-7.519.692-2.419.259-4.839.691-7.173 1.037-2.851.345-5.703.518-8.555.864-2.679.346-5.444.864-8.123 1.296-.951.173-1.902.519-2.852.691-2.074.433-4.235.606-6.309 1.297-3.716 1.123-7.432 2.42-11.062 3.802-3.37 1.383-6.654 2.852-9.851 4.581-3.284 1.814-6.395 3.975-9.507 6.049-2.938 1.987-5.876 4.062-8.728 6.309-2.765 2.16-5.358 4.58-7.864 7-1.383 1.382-2.506 3.024-3.803 4.58-2.16 2.506-4.321 4.926-6.395 7.518-1.728 2.161-3.284 4.408-4.925 6.655-2.939 3.975-5.445 8.209-7.778 12.444-.951 1.728-1.815 3.457-2.679 5.185-1.297 2.593-2.679 5.099-3.889 7.778-.864 1.815-1.556 3.802-2.074 5.79a698.06 698.06 0 0 0-3.543 12.79C.36 100.183.1 104.159.014 108.048c-.087 3.456.259 6.827.605 10.284.086.864-.432 1.901.605 2.592.086 0 0 .346-.087.432-.259.519 0 1.037.519 1.21 0 0 .086.087.086.173H1.31c-.259.778.605 1.383.259 2.247-.086.173.26.518.432.778 0 .259-.086.605 0 .864.087.778.433 1.555.433 2.42 0 .605.518 1.296.691 1.901.086.259 0 .691-.173.864-.518.605-.432 1.124.346 1.469.173.087.432.432.432.605 0 .519-.173 1.037-.259 1.556.172.173.259.345.172.518 0 .259-.259.519-.172.692.691 1.382.95 2.938 1.037 4.493 0 .346.173.692.345 1.124.087 0 .346 0 .519.086l-.519 1.556c.432-.26.778-.346 1.21-.519.259 1.124.519 2.161.864 3.111.087.173.26.346.519.519-.087.173-.087.518-.259.605.345 1.555.518 3.025 1.123 4.494.087 0 .173-.087.259-.087-.259-1.555-.432-3.197-.691-4.753v-.518s.173-.087.259-.087c.087.346.26.778.26 1.037.691 0 1.728.432 2.419.432.087-.259.173-.605.26-.777-.519-.519-.951-1.297-1.47-1.815.173.691 0 .95 0 1.21a16.785 16.785 0 0 0-1.209-.519c.345-.432.691-.864 1.209-1.383 0-.777-.432-1.469-1.642-1.382.519-.173 1.038-.432 1.642-.605.087.259.173.518.26.691.691-1.21-.346-2.16-.346-3.37.086-1.469-.778-2.938-1.037-4.494-.432-2.42-.346-6.049-.605-8.469 0-.173-.259-.346-.432-.519-.087.087-.519 1.21-.605 1.297.259 2.074.518 4.148.691 6.222-.086 0-.173 0-.173.086-.345-1.815-.691-3.716-1.123-5.79-.086.605-.173.864-.173 1.21-.259-.086-.345-.173-.778-.346.346.778.692 1.297.951 1.902-.605-.26-1.296-.173-1.296-.173v2.419c-.864-.864-1.124-1.555-1.556-2.16-.173-.691-.259-1.383-.432-2.074l.259-.087c-.086-.345-.259-.605-.259-.864a67.673 67.673 0 0 1-.259-2.074c.086-.086.432-.173.605-.345l-.692-1.037c.692.086 1.124.172 1.556.172 0-.172.086-.259 0-.345-.864-.778-.259-1.47.086-2.161.173-.346.778-.432.951-.778.691-1.296 1.815-2.333 1.815-3.975 0-.778.259-1.642.345-2.42.173-1.469.346-2.938.433-4.407.172-1.901 0-3.803.432-5.617.691-3.025 1.555-6.05 2.506-9.074.691-2.161 1.469-4.235 2.333-6.395 1.297-3.371 2.506-6.741 4.148-9.939 2.334-4.666 5.013-9.16 7.605-13.74 1.642-2.852 3.371-5.531 5.185-8.297 1.729-2.679 3.457-5.444 5.445-7.95 2.765-3.543 5.79-6.827 9.16-9.766 3.457-3.111 6.741-6.308 10.457-9.16 4.84-3.716 9.938-7 15.383-9.852 4.407-2.333 8.987-4.148 13.568-5.877 2.938-1.123 6.135-1.641 9.16-2.592 3.457-1.124 6.914-1.642 10.543-1.729 2.334-.086 4.581-.345 6.914-.604 2.074-.173 4.148-.346 6.395-.605a3.809 3.809 0 0 0-.432.691c-.951 1.383-1.988 2.765-2.938 4.148-.778 1.124-1.642 2.333-2.42 3.457-1.383 1.815-2.852 3.63-4.148 5.531-1.988 2.852-3.803 5.79-5.877 8.642-2.074 2.765-4.321 5.358-6.481 8.037-2.852 3.716-5.531 7.518-8.383 11.234-2.593 3.544-5.358 6.914-7.864 10.457-2.247 3.111-4.235 6.395-6.395 9.593-3.198 4.753-6.395 9.419-9.593 14.172a817.832 817.832 0 0 1-7.605 10.803c-.173.259-.432.346-.691.518-.173.173-.519.346-.519.519-.172.605-.172 1.21-.432 1.728-.691 1.297-1.382 2.593-2.16 3.803-.432.691-1.037 1.296-1.556 1.987-.173-.086-.259-.172-.432-.172.346-.865 1.815-1.383 1.124-2.679-.432.691-.865 1.296-1.297 1.987l-1.037 2.074c.346.26.951.432.346.951-.259.432-.519.95-.778 1.383.087 0 .087.086.173.086.259-.346.519-.605.778-.951.086 0 .173.087.259.087-.259.864-.778 1.642-1.21 2.42-.346.691-1.21 1.209-1.815 1.728.087.086.692.346.778.432.259-.346.346-.173.605-.518.173.259.432-.173.519.086.259-.346.518-.605.605-.864.345-.864.864-1.556 1.728-1.901.346-.173.605-.433.864-.692 2.593-2.679 5.272-5.271 7.605-8.123 3.63-4.408 6.914-8.988 10.37-13.482 1.47-1.901 3.198-3.802 4.753-5.617.173.087.346.087.433.173-.173 1.815-.346 3.716-.433 5.531-.259 3.197-.432 6.395-.691 9.679-.086 1.296 0 2.592-.086 3.889 0 .345-.26.604-.26.95 0 .864.26 1.815.26 2.679-.26 3.198-.605 6.309-.865 9.506-.086.692.26 1.383.433 1.988-.087-.086-.173-.173-.433-.346 0 5.013.951 9.939.173 14.865.346-.087.519-.173.519-.346.086-.605.259-1.21.259-1.815.087-.518 0-1.037 0-1.642v-.864c.087-1.556.432-3.198.259-4.753-.172-1.729-.172-3.371.173-5.013.173-.691-.086-1.555.346-2.419v1.296c-.087 4.926.086 9.852-.605 14.778-.086.432.259 1.21-.691 1.123-.087 0-.173.432-.346.692-.432.864.518 1.987-.346 2.851-.173.173.173.951.259 1.47 0 .172.087.345 0 .432-.345.605-.345.605.173.691.087 1.901.26 3.63.346 5.444h.259c1.124-3.284.432-6.654 1.037-10.024.087 1.382.173 2.765.087 4.234 0 2.247-.087 4.408-.173 6.655 0 .432-.087.864-.173 1.296-.259 1.21-.346 2.42-.778 3.543-.345.864-.173 2.161-.173 3.198v3.283c0 .087.26.346.26.692.086.778-.346 1.556-.087 2.42.087.173-.086.432-.173.605-.086.259-.172.518-.086.777l.259 1.297c0 .086.087.173.173.345.087-.345.087-.605.087-.691 1.469.173.691 1.469 1.382 2.161-.345.172-.605.259-.605.345.087.346.26.605.26.951 0 .777-.087 1.469-.173 2.247 0 1.987-.087 3.975-.087 5.876 0 .259.087.519.087.778 0 .173-.087.346-.087.605v1.815h.346c-.173.259-.346.518-.605.777-.086 0-.346 0-.346-.086v-10.889h-1.296c-.173 5.185.259 9.852-.691 14.691-1.037.087-1.383.26-2.506.26-2.679 0-5.358 0-8.037.086-3.198 0-6.309.087-9.507.087-1.555 0-3.197.172-4.753.172-2.074 0-4.234-.259-6.308-.259-3.198 0-6.309.259-9.506.346-2.334.086-4.667.086-7 .173-1.556.086-3.112.173-4.667.345-.691.087-1.296.346-2.161.605-.259 0-.864-.086-1.382 0-.864.173-1.642.692-2.506.864-1.297.26-1.642.605-1.47 1.902v.864a2.588 2.588 0 0 0-.605-.432c-.086 0-.172.086-.172.086.086.259.259.432.345.692.346-.173.778-.605 1.124-.605h1.21c-.173 0-.26.518-.519.95a66.78 66.78 0 0 0 1.556-.605c.086.26.086.605.086.692 1.21-.087 2.333-.432 3.37-.173 3.371.864 6.828 1.21 10.284 1.555 2.247.173 4.408.26 6.655.346 3.197.173 6.395.346 9.592.346 2.679 0 5.272-.259 7.951-.259 3.716 0 7.432.172 11.148.259.778 0 1.642-.087 2.506-.087h6.309c5.617-.172 11.234-.259 16.852-.432 3.197-.086 6.481-.259 9.679-.345l9.851-.26c3.803-.086 7.605-.086 11.321-.173 2.852 0 5.618-.086 8.469-.172 3.198-.087 6.482-.346 9.679-.519 1.729-.086 3.457-.259 5.186-.432 2.074-.173 4.234-.432 6.308-.519 3.111-.172 6.309-.259 9.42-.432 3.889-.259 7.778-.605 11.753-.691 3.63-.173 7.346-.086 10.975-.173 3.198-.086 6.395-.259 9.679-.345l5.445-.26s3.629-.086 5.444-.259c3.111-.173 6.222-.519 9.333-.605 1.988-.086 3.976 0 5.963-.086 3.198-.087 6.482-.26 9.679-.26 1.21 0 2.507.173 4.062.26-.691.605-1.123.95-1.642 1.382.346.087.691.26 1.037.432 0 .087-.086.173-.086.346-.432 0-.864.087-1.297.087-.172.432-.345.604-.518 1.469h1.555c-.604 0-1.123.777-1.728 1.296.087.086.173.086.259.173-.95-.346-1.555-.173-1.901.778.259.086.432.086.691.086-.086.259-.172.519-.259.864-.086.173-.173.346-.173.605l-.259-.259c0-.173 0-.346-.086-.519-.519.519-1.297.865-.865 1.988-.345.173-.777.346-1.209.605.086.173.259.346.345.605-.777.086-1.555.259-1.382 1.21.345.086.691.259.95.345-.432.173-.864.432-1.296.605-.087.173-.173.605-.346.692-1.21.259-.518.691-.173 1.123-.259.173-.518.346-.777.432.259.087.432.173.605.346-.26.173-.433.259-.605.346.172.086.432.259.518.259-.346.259-.778.605-1.296 1.037 0 .173 0 .259.086.432-.345.346-.691.691-1.037 1.21-.345.518-.518 1.21-.95 1.728-1.815 1.988-3.112 4.321-5.445 5.877-.864.605-1.642 1.382-2.42 2.16-1.555 1.469-2.938 3.111-4.58 4.494-2.16 1.815-4.407 3.457-6.741 5.099-2.851 1.987-5.703 3.975-8.555 5.876-1.556 1.037-3.284 1.815-4.926 2.766-1.642.95-3.197 1.815-4.84 2.765-1.037.692-1.987 1.642-3.111 2.161-2.852 1.21-5.876 2.247-8.814 3.37-.26.086-.432.173-.692.259-2.16.951-4.234 1.988-6.395 2.766-1.988.691-4.061 1.21-6.136 1.642-.691.173-1.469 0-2.246.086-1.47.259-2.939.605-4.408.778-3.802.519-7.605.864-11.407 1.383-2.247.259-4.408.691-6.655.95-1.555.087-3.197-.086-4.753-.086-1.123 0-2.333.259-3.457.086-1.814-.259-3.629-.691-5.444-1.037-.432-.086-1.037-.259-1.383-.086-.691.345-1.296-.173-1.987 0-.432.086-.864-.259-1.297-.259-.345-.087-.777.086-1.209 0-.951-.26-1.815-.605-2.852-.519-1.037.087-2.074-.432-3.198-.691-1.555-.346-3.024-.692-4.58-1.037-.605-.173-1.123-.432-1.728-.778-.173.086-.433.259-.778.259-1.469-.259-2.938-.345-4.321-.864-1.21-.432-2.333-1.037-3.63-.864-.345.086-.605-.087-.95-.087-.26-.345-.519-1.037-.778-1.037-1.729.087-2.766-1.382-4.235-1.814-.778-.26-1.382-1.124-2.16-1.383-1.901-.778-3.457-2.42-5.617-2.679-.692-.087-1.383-.432-2.161-.692.259.346.432.605.691.865l-.173.172c-2.333-1.382-4.666-2.765-6.999-4.061-.346-.087-.605-.432-.865-.605l-2.333-1.556c-.259-.173-.778-.432-.778-.346-.518.606-1.037.087-1.382-.086-2.334-1.642-5.013-2.679-7.26-4.494-.95-.777-2.074-1.296-2.765-2.247-1.21-1.469-2.679-2.506-4.321-3.37-1.296-.691-2.506-1.469-3.716-2.247-.605-.432-1.21-.95-1.21-1.901 0-.605-.259-1.21-1.037-.864-.346-.519-.691-1.124-1.123-1.297-1.037-.432-1.729-1.209-2.507-1.901-.777-.691-1.382-1.642-2.333-1.987-1.728-.692-2.765-2.161-3.802-3.371-2.42-2.852-4.581-5.963-6.828-8.988-.172-.259-.518-.432-.777-.691l-.087.087c.432.864.864 1.642 1.297 2.506-.087.086-.26.173-.346.259-.519-.605-1.124-1.21-1.642-1.815-.087.087-.173.173-.259.173l6.222 9.852c.518.778.95 1.555 1.469 2.333a1.17 1.17 0 0 1-.346.259c-.95-.172-1.814-.864-2.247-1.642-.777-1.382-1.642-2.246-3.37-2.074-.173-.605-.346-1.296-.432-1.901-.346 0-.605 0-1.21-.086 1.21 1.901 2.247 3.543 3.37 5.444-.432-.259-.691-.432-.864-.518 1.556 1.642 2.679 3.716 4.667 4.753.432 1.987 2.679 2.938 3.197 4.839-.432-.086-.777-.173-1.209-.259-.692-.864-1.47-1.728-2.247-2.679.172.605.432 1.123.777 1.556 1.037 1.296 1.988 2.592 3.198 3.716.432.432 1.037.605 1.037 1.382.173-.173.346-.259.691-.432-.173.346-.259.519-.345.778.345 0 .605.086.864.086.173.519-.087 1.297.95 1.124.087 0 .173.086.26.173.432 1.123 1.123 1.123 2.074.691.173-.086.605 0 .691.173.432.95 1.037 1.037 1.815.346 0 .432.086.864.086 1.209h.346c0-.172-.086-.432-.086-.864.432.346.691.519.864.692.864 1.209 1.642 2.333 2.852 3.283 1.642 1.383 3.111 2.852 4.666 4.149 3.025 2.506 6.395 4.58 9.766 6.481 4.148 2.333 8.123 4.84 12.358 7.086 5.098 2.68 10.543 4.494 16.16 5.791 2.074.432 4.062.864 6.136 1.382 1.815.519 3.63 1.297 5.444 1.729 2.766.605 5.618 1.123 8.383 1.642.605.086 1.21.173 1.901.259v.173c.778 0 1.729-.346 1.902-.087.432.692.777.346 1.296.26.605-.173 1.296-.173 1.987-.173 2.42.086 4.753.605 7.173.432.519 0 1.297-.432 1.729.432.173-.087.259-.173.432-.259.345-.087.778-.087 1.123-.173v.173c-.173.086-.345.086-.691.173.432.086.691.172.951.259-.173.173-.26.173-.433.259-.172.086-.432.173-.777.432 3.111.605 6.049.692 8.642 0v-.518h.345c0 .172.087.345.173.518 3.975.346 7.864-.173 11.58-1.469.346.432.605 1.037 1.124.173.173-.259.605-.346.95-.432.778-.173 1.729-.519 2.42-.259.778.259 1.037-.433 1.642-.433a16.14 16.14 0 0 0 2.938-.259c.519-.086 1.037-.346 1.642-.518 0-.087 0-.173-.086-.26-.605-.086-1.296-.172-1.815-.172 1.037-.519 1.988-.951 2.938-1.383 0 .086.087.086.087.173-.26.086-.432.432-.778.432h1.21c-.259 0-.605.778-1.037 1.296 3.111-.778 5.963-1.469 8.728-2.16v-.173c-.345.086-.605.086-.864.173-.086-1.815 1.901-1.21 2.593-2.247-.865.259-1.729.518-2.593.691v-.173c2.938-1.296 5.963-2.592 8.901-3.889 0 .087.087.087.087.173-.519.346-1.037.605-1.815 1.037.518.087.864.087 1.123.173 0 .259 0 .432-.086.519 1.469-.087 1.123-1.383 1.555-2.161.26.086.605.259.865.173.777-.173 1.469-.432 2.246-.691.865-.26 1.729-.519 2.593-.865 1.383-.605 2.679-1.382 4.062-2.074.259-.086.691 0 1.037 0 .259 0 .432-.173.605-.345.345-.26.691-.778.95-.692 1.21.173 2.074-.259 2.42-1.382.087 0 .087-.087.173-.087.432-.345.864-.691 1.296-.951 1.902-1.037 3.716-2.073 5.618-3.111.086-.086.259 0 .432 0 .259 0 .605 0 .777-.086 1.124-.519 2.161-1.123 3.198-1.728-.259-.087 0-.173-.864-.26v-.173c.864-.172 1.123-.259 1.642-.432l-.173-.172c2.247-2.247 5.099-3.889 7.259-5.79.432.086.605.172.864.172.087-.259.087-.518.087-.691.345-.432.691-.951 1.123-1.296 1.901-1.729 3.976-3.198 5.704-5.013 2.506-2.506 4.926-5.098 7.173-7.777 2.074-2.42 4.148-4.84 5.876-7.519 2.42-3.716 4.494-7.518 6.654-11.407 1.556-2.766 2.939-5.531 4.494-8.297.173-.259.519-.604.778-.604 2.333-.26 4.667-.433 6.914-.692.518-.086 1.123-.432 1.642-.691-.26-.432-.433-.951-.692-1.383-.345-.519-.864-.951-1.21-1.469-.345-.432-.604-.951-.864-1.469-.259-.432-.518-.778-.778-1.21-.518-.951-1.037-1.901-1.469-2.938-.086-.26-.259-.692-.173-.951 1.556-3.37 2.161-7 3.63-10.37 1.469-3.457 1.901-7.346 2.593-11.062.605-3.543.95-7.086 1.382-10.63.26-2.506.605-4.926.692-7.432.518-3.975.345-7.691.259-11.407ZM38.643 217.541c-.604-.691-1.123-1.469-1.728-2.16l.259-.26c.951 1.038 1.902 2.074 2.852 3.198-.518-.259-1.123-.432-1.383-.778Zm1.383.778c.259-.086.519-.086.778-.173.259.432.432.951.691 1.469-1.21-.086-1.815-.605-1.469-1.296Zm89.876 35.691v-.259c1.642-.173 3.198-.346 4.84-.518v.259a45.946 45.946 0 0 1-4.84.518Zm21.778-2.247c-1.21.26-2.506.432-3.716.605-.432.087-.95.519-1.123-.259-.173.086-.346.086-.519.173.432 1.296 1.469.259 2.333.778-1.901.259-3.716.432-5.53.691v-.173c.518-.086 1.123-.173 1.642-.259v-.259c-.865-.087-1.729-.173-2.593-.173-.259 0-.605.346-.864.432-.346.086-.692.173-1.124.173-1.469.086-2.938.086-4.321.173-.086 0-.259-.087-.345-.087v-.259c5.79-.778 11.494-1.556 17.284-2.333.086.172.086.345.172.518-.518 0-.864.173-1.296.259Zm1.296-.864c1.988-.259 3.803-.432 5.704-.691-3.975 1.123-5.271 1.296-5.704.691ZM77.705 76.418c2.766-3.802 5.617-7.605 8.383-11.494.864-1.123 1.555-2.333 2.42-3.456.259-.346.604-.519 1.037-.865l-.087-.172c.346-.433.691-.778.864-1.124.432-.691.692-1.469 1.037-2.247.087-.173.346-.345.346-.345 1.21.604 1.21-.692 1.642-1.124a61.142 61.142 0 0 0 2.247-2.679c.518-.691 1.037-1.296 1.469-2.074.086-.259-.173-.691-.259-1.037h-.259c.259-.173.518-.432.777-.605.087 0 .087 0 .173-.086.519-.778 1.037-1.556 1.556-2.247 1.037-1.383 2.16-2.766 3.37-3.976-.173.432-.346.865-.518 1.21.086 0 .086.087.172.087 1.037-1.383 2.161-2.679 3.198-4.062-.087-.086-.173-.173-.259-.173-.432.432-.778.864-1.21 1.296-.087-.086-.173-.172-.26-.172.865-1.124 1.729-2.247 2.593-3.544.173.26.346.605.691 1.297.346-.865.692-1.47.951-2.074-.259.259-.605.518-.864.777l-.26-.259 1.556-2.333c1.642-2.334 3.284-4.753 4.926-7.087.605-.864 1.383-1.555 1.901-2.419 1.642-3.284 4.235-5.877 6.222-8.902.433-.604 1.037-1.123 1.556-1.642.432-.518.778-.345 1.124.087 2.333 2.938 4.666 5.963 6.999 8.901 1.729 2.161 3.457 4.235 5.099 6.481 1.988 2.766 3.889 5.531 5.877 8.297 2.247 3.197 4.494 6.395 6.654 9.679 3.284 4.839 6.395 9.679 9.679 14.518 2.42 3.544 4.84 7 7.173 10.544h-4.408c-4.061-.087-8.209-.433-12.271-.26-5.531.26-11.148.864-16.679 1.296-7 .605-14.087.692-21.086.692-2.507 0-5.013.345-7.519.518-3.025.173-5.963.346-8.988.433-3.543.172-7 .259-10.543.345-1.987.087-4.062 0-6.222 0Zm99.123 39.753v.778c-.086 0-.173.086-.346.086-.345-1.21-.691-2.506-1.123-3.716-.864-2.506-1.815-5.012-3.37-7.259-1.729-2.42-3.284-4.926-5.013-7.432-.432-.605-1.037-1.124-1.555-1.642-1.815-1.988-3.63-4.062-5.963-5.531-3.457-2.16-7-3.975-10.803-5.531-1.037-.432-1.987-.95-3.024-1.555h2.074l14.778-.259c3.197-.087 6.308-.087 9.506-.26.778 0 1.21.26 1.642.951.778 1.296 1.555 2.592 2.419 3.889.087.172.26.432.26.691 0 1.901 0 3.889.086 5.79.087 1.988.259 3.889.346 5.877 0 1.987-.173 4.061-.087 6.135.087 2.939.173 5.963.173 8.988Zm-92.987-28.95c4.062-.173 7.95-.433 11.926-.605 3.111-.173 6.308-.26 9.419-.432 1.297-.087 2.507-.173 3.803 0-1.383.691-2.765 1.382-3.975 2.247-1.556 1.036-3.025 2.419-4.581 3.543-1.555 1.123-2.938 2.506-4.234 3.975-1.642 1.988-3.457 3.716-5.185 5.617-1.21 1.383-2.593 2.679-3.63 4.148-1.469 1.902-2.765 3.976-4.148 6.136.432-8.21.951-16.333.605-24.629Zm56.432 83.135c-2.766.691-5.617 1.469-8.469 1.815-2.42.346-4.926.259-7.432.259-2.247 0-4.408-.086-6.655-.259-2.506-.259-5.012-.519-7.432-1.642-2.074-.951-4.234-1.815-6.308-2.852s-4.149-2.247-5.704-4.148c-1.124-1.383-2.679-2.506-4.062-3.716a4.073 4.073 0 0 0 1.815 2.506c-.432.519-1.037.259-1.901-1.123-.259.172-.519.259-.692.345.26-.605.519-1.209.778-1.728-.345-.691-.778-1.469-1.123-2.16a70.764 70.764 0 0 1-1.988-3.457c-.173-.26-.173-.519-.346-.778-.432-.519-.864-1.037-1.209-1.556-.692-1.037-1.297-2.16-2.161-3.197 0 .259.086.518.086.864-.086 0-.172.086-.172.086l-1.815-4.407c-.087 0-.087 0-.173.087l1.556 5.703c-.087 0-.173.087-.26.087-.259-.346-.518-.692-.691-1.124-.173-.691-.691-.691-1.124-.432-.259.173-.432.778-.345 1.037.605 1.469 1.296 2.938 1.987 4.408.173.518.346.95.605 1.469.087.173.346.345.346.605.346.691.605 1.382 1.037 1.987.778 1.037 1.642 2.074 2.42 3.111.778 1.037 1.469 2.161 2.16 3.198.087.173.346.173.432.259.433 1.296 1.902 2.247 2.939 1.729.259 1.987 2.419 2.679 3.284 4.58a39.795 39.795 0 0 1-2.507-1.124c-.086.087-.086.173-.172.346 1.037.518 2.074 1.037 3.024 1.642.864.518 1.729 1.037 2.506 1.642 1.038.95 2.247 1.469 3.717 1.815-.087-.26-.173-.346-.173-.346a277.903 277.903 0 0 1 6.827 3.284c-8.988.173-18.58.346-28.519.518 0-1.642-.086-3.197-.086-4.839 0-.691.173-1.296.086-1.988-.259-3.975-.259-7.95-.777-11.839-.519-4.148-.519-8.21-.432-12.358.086-2.247-.087-4.58-.173-6.827 0-3.025 0-5.963.086-8.988 0-.432.173-.778.346-1.21h.259c.086.173 0 .432.173.519.259.259.691.691.864.605.519-.346 1.296-.692 1.469-1.21.432-1.037.605-2.161.605-3.198 0-.777.346-1.296.691-1.815.173-.259.26-.518.433-.864-.346-.259-.692-.432-1.124-.777.346-.951.259-2.075 1.556-2.593.173-.087.173-.519.259-.778.086-.691.173-1.469.259-2.16.173.259.259.345.432.518.087-.173.173-.259.173-.259 0-.346-.086-1.037 0-1.037 1.037-.173.605-1.296 1.124-1.815.086-.086-.087-.346-.087-.518 0-.173 0-.433.087-.433 1.209-.259 1.037-1.555 1.814-2.16.26-.173.346-.432.692-.864.691 1.21-.519 1.815-.605 2.679 1.469-.864 1.901-2.938 1.037-3.543.346-.26.691-.605.95-.951.951-1.037 1.988-1.988 2.852-3.025.605-.778.951-1.728 1.556-2.506.346-.432 1.037-.778 1.555-1.037 1.556-.864 3.025-1.815 3.976-3.284.173-.173.432-.346.691-.518.259-.173.778-.173.864-.433.087-.172-.173-.604-.346-.864.346-.173.692-.518 1.383-.864-.259.519-.345.864-.518 1.21l.432.432c.778-.605 1.988-1.296 2.765-1.815 0-.086-.432-.432-.432-.432-.518.26-1.296.692-2.074 1.037.173-.259.173-.432.259-.518 1.21-.778 2.42-1.556 3.716-2.161 3.025-1.383 6.05-2.765 9.074-4.062.519-.259 1.21-.086 1.815-.086.259 0 .432 0 .692-.086 1.382-.432 2.765-.864 4.148-1.21a7.19 7.19 0 0 1 1.901-.259c2.593.086 5.185.086 7.778.259 1.123.086 2.16.346 3.197.691 1.297.432 2.679 1.037 3.889 1.642a42.747 42.747 0 0 1 4.235 2.593c2.506 1.642 4.839 3.456 7.345 4.926 2.42 1.469 4.321 3.456 5.877 5.703 1.901 2.679 4.062 5.099 4.926 8.383l1.296 5.704c.259 1.037.864 2.074.605 3.284-.432 2.16-.778 4.407-1.123 6.568-.173.864-.346 1.728-.26 2.592.173 2.679-.864 5.012-1.901 7.432-.346.778-.864 1.556-1.296 2.42.086.086.605.346.691.346l.778-1.556c.086 0 .086 0 .173.087-.432 1.209-.778 2.506-1.21 3.716-1.037 2.679-2.074 5.444-3.37 8.037-.692 1.469-1.902 2.679-2.766 4.061-.864 1.21-1.555 2.506-2.42 3.63-.777.951-1.555 1.901-2.592 2.593-2.334 1.728-4.753 3.456-7.259 4.839-1.556.951-3.371 1.469-5.099 1.901Zm-46.062-4.58-.086.086c-.173-.086-.432-.173-.605-.345l-2.074-3.111c-.173-.26-.259-.519-.173-.865a73.511 73.511 0 0 0 2.938 4.235Zm53.753 11.839c3.889-1.642 7.087-3.975 10.025-6.654.432-.432.864-.864 1.383-1.21 3.629-2.247 6.308-5.358 8.728-8.815 2.765-3.975 4.58-8.469 6.827-12.703.173-.346.346-.692.519-.951-.173 9.852.95 19.531 2.246 29.296-9.765.346-19.703.692-29.728 1.037Zm87.63-2.592c-.087.173-.26.345-.346.518-.087-.173-.087-.432-.173-.777-.519 1.382-1.642.691-2.42.691-4.666.086-9.419.086-14.086.086-4.494 0-9.074 0-13.568.087-1.469 0-3.025.345-4.494.432-3.543.173-7.086.259-10.629.345-.26 0-.519-.432-.951-.777-.086.173-.259.432-.519.777-.086-.172-.259-.345-.432-.604a5.98 5.98 0 0 1-.259.691h-.259c-.173-1.21-.519-2.333-.519-3.543 0-2.593.259-5.185.346-7.778.086-1.21 0-2.333 0-3.457.346.26.605.432.951.692.172-.346.345-.605.518-.865 0 0-.173-.086-.346-.259.173-.086.346-.259.346-.345.087-.26.259-.519.259-.692 0-.605-.172-1.123-.259-1.642.087 0 .173 0 .259-.086l.519 2.592h.259c-.345-.605.778-1.123-.173-1.815-.086-.086.087-.605.087-.864-.259-.518-.432-1.037-.692-1.728.087-.086.346-.173.605-.259-.345-.173-.605-.346-.864-.433.864-.777.864-1.209.087-2.074.172-.086.345-.086.345-.172 0-.778 0-1.556-.173-2.334-.172-.864.26-1.901-1.037-2.419a2.6 2.6 0 0 0 .346.691s-.259.086-.519.259c-1.123-1.037-.432-2.42-.691-3.975.605.173 1.037.346 1.469.518-.173-.604-.605-1.296-.864-2.074h-.346v-5.703c0 .086.605.086.951.172 0-.086.086-.172.086-.259-.259-.346-.605-.691-.95-1.123l.173-.173c-.692-.864-.346-2.074-.346-2.333v-6.05c.864.864-.432 1.988.864 2.506v-.864h-.086c-.087-1.296-.087-2.592-.173-3.889h-.173c-.086.173-.086.26-.173.432h-.173c.173-6.827.346-13.654.519-20.654.864 1.124 1.815 2.161 2.42 3.284 1.987 3.63 4.58 6.741 7 10.025 2.074 2.852 3.975 5.963 5.876 8.901 2.333 3.543 4.58 7.086 6.914 10.63a253.707 253.707 0 0 0 5.358 7.95c1.642 2.333 3.37 4.58 5.099 6.827 1.469 1.988 3.024 3.976 4.493 5.963 1.729 2.42 3.457 4.84 5.186 7.173.864 1.21 1.814 2.42 2.765 3.63.518.691 1.296 1.21 1.815 1.642-.087 0-.173 0-.346-.087.259.346.432.605.605.778.951.518 1.037 1.037.519 1.815Zm4.407-21.605v-.605c0 .173.086.432 0 .605Zm2.938-38.111c-.086 0-.605-.519-.691-.605-.087.259 0 .518-.173.864-.086-.259-.691-.173-.691-.432-.087 1.21.518 2.42.432 3.63.259-.173 1.296-.26 1.555-.519.087.087.259.173.346.173-1.728 1.296-1.296 2.593-.519 4.062.173.345.692 1.037.173 1.728-.173.173.087.692.173 1.124h.259v.172l-.777.26c-.173-.26-1.21-.778-1.21-1.21v4.407c.864.259.864 1.469 1.21 2.074.172-.259.259-.432.345-.691l.087.086c-.087.519-.173 1.037-.346 1.556-.173.778-.346 1.469-.432 2.247 0 .086.173.259.173.345-.951 2.161-.432 4.581-.778 6.828-.259 1.642 0 3.37-.173 5.098-.173 1.47-.518 3.025-.864 4.494-.086.259-.259.346-.691.519.172-1.037.086-1.729-.087-2.679-.086 0-1.21-.605-1.296-.605 0 1.21.691 2.852.951 4.234-.26-.086-1.297-.691-1.383-.691-.173 1.037-.173 2.42-.259 3.543-.087.864-.865 1.642-.951 2.593 0 .518.605.864.518 1.728h.692c0-1.728.778-3.284.778-5.099h.259c.086.173.346.346.259.433-.173.95-.518 1.987-.432 2.938 0 .518.432 1.037.259 1.642-.173.518-.259 1.037-.345 1.814-.087-.432-.173-.604-.173-.864-.087 0-.864-.086-.951-.086-.086.518.605 1.037.519 1.469-.087.087-.173.087-.346.173l-2.852-4.148a995.684 995.684 0 0 1-6.741-9.938 20.627 20.627 0 0 1-1.555-2.593c-2.679-4.58-5.617-8.988-8.901-13.222-2.507-3.198-4.494-6.655-6.828-10.025-2.16-3.197-4.321-6.309-6.481-9.506-.778-1.037-1.728-1.988-2.42-3.111-2.247-3.543-4.234-7.173-6.481-10.716-1.901-2.939-3.976-5.79-5.963-8.642a92.195 92.195 0 0 1-2.074-3.025c-.087-.173-.173-.346-.173-.605-.173-1.901-.346-3.802-.432-5.617 0-1.729.173-3.457.173-5.272v-1.555c0-.432.086-.778.086-1.21.086-.087.173-.259.259-.346-2.506 0-5.098-.086-7.605 0-1.641.087-2.506-.605-3.629-1.814-3.284-3.717-5.704-7.951-8.556-11.926-2.679-3.803-5.444-7.519-8.21-11.235-2.246-3.025-4.493-5.963-6.74-8.988-2.506-3.456-4.926-6.913-7.519-10.37-3.111-4.148-6.308-8.296-9.506-12.444-1.469-1.902-3.111-3.716-4.753-5.704 1.123.173 2.16.346 3.198.432l4.148.259c3.111.26 6.222.432 9.333.864 2.593.346 5.185.865 7.864 1.297 5.704.95 11.321 2.506 16.766 4.321 3.197 1.037 6.308 2.42 9.419 3.716 7 2.852 13.655 6.308 20.222 9.938 2.075 1.123 3.284 2.938 4.84 4.58 2.247 2.334 4.494 4.667 6.654 7.087 2.506 2.852 4.84 5.79 7.259 8.728 2.161 2.593 4.408 5.185 6.568 7.778.692.778 1.21 1.728 1.815 2.592 1.383 2.074 2.938 4.062 4.148 6.309.865 1.642 1.383 3.543 1.988 5.358.864 2.679 1.728 5.272 2.593 7.951a71.016 71.016 0 0 1 1.555 6.135c.346 1.383.259 2.852.691 4.235.519 1.815 0 3.802.519 5.617.086.173.173.432.259.605.346.346.605.691.087 1.21-.087.086-.087.432 0 .691.172-.172.259-.345.432-.605 0 .173.086.26.086.346 0 .346-.086.691 0 1.037 0 .173.173.432.259.605.173-.173.346-.259.692-.518.777 2.938.864 5.876.864 8.901 0 2.852.518 5.703-.691 8.469.259-.951-.346-1.815-.087-2.679Z"
      style={{
        fill: '#dd3735',
        fillRule: 'nonzero',
      }}
      transform="translate(21.015 21.907) scale(3.83583)"
    />
    <path
      d="M188.001 149.197c.086 0 .173.087.173.087l-.087-.087c0-.086 0-.086-.086 0Zm13.654 85.383c-.95.691-1.901 1.296-3.111 1.555-.086-.086-.086-.173-.173-.259.951-.605 1.988-1.21 2.939-1.815.086.173.259.346.345.519ZM39.619 117.481c.95-1.21 1.901-2.42 2.938-3.629.086.086.778.259.864.345-.95 1.21-2.247 2.852-3.197 4.148-.173-.172-.432-.777-.605-.864Zm-24.543 42.346c-.692-1.469-1.383-3.025-2.074-4.494.086-.086.691-.346.777-.346.951 1.383 1.383 3.025 2.074 4.494 0 0-.691.346-.777.346Zm22.037-41.482c-.519.778-1.037 1.642-1.556 2.42-.086-.086-1.037.346-1.123.259.518-.777 1.814-2.16 2.333-2.938.086.087.173.173.346.259Zm155.295 119.778c.087 0 .087-.087.173-.087.605.087 1.297.173 1.988.173-1.124.778-1.815.692-2.161-.086ZM37.285 121.975c.087-.259.26-.519.432-.778.173 0 .433-.086.433-.086.345-.605.345-1.037.691-1.556-.086-.086-.173-.086-.259-.173-.519.346-1.037.778-1.556 1.124.173.173.173.259.173.432-.691-.086-.951.259-1.296 1.21-.087.259-.519.345-.951.691-.086.173-.173.605-.346 1.037l.087.087a1.279 1.279 0 0 1-.432.259c-.519.518-1.124.951-1.642 1.469-.087.259-.173.519-.173.778.605-.605 1.642-1.729 2.42-2.42l.086.086c.346-.518.605-1.037.951-1.555.086.086.086.173.173.259-.26.691-.519 1.469-.778 2.161-.173.086-.432.259-.432.173-.346.259-.605.604-.951.864l-1.555 1.037c-.865.778-1.729 1.469-2.679 2.247-.605.95-1.21 1.814-1.902 2.938 1.037-.259 1.297.173 1.21 1.037 1.21.173 1.296-.778 1.642-1.469.087-.173.173-.519.346-.605.778-.691 1.642-1.296 2.506-1.988.173-.173.173-.518.173-.778 0-.086-.432-.086-.691-.172.777-.865 1.901-2.334 2.679-3.284.432-.26.864-.605.864-.865-.087-.95.518-1.209 1.209-1.555-.345-.259-.432-.519-.432-.605Z"
      style={{
        fill: '#dd3735',
        fillRule: 'nonzero',
      }}
      transform="translate(21.015 21.907) scale(3.83583)"
    />
    <path
      d="M39.014 121.024c-.346.605-.691 1.124-1.037 1.729l-.519-.26c-.345 1.988-1.555 3.717-2.765 4.062.346.173.691.346.951.259.259-.086.432-.518.604-.777l2.334-3.371.778-1.296-.346-.346Zm-28.778 37.938c.432 0 .864.087 1.383.087 0-.346.432-.259.432-.605h.259c0 .432.087.778.087 1.21h-1.815c-.087-.087-.432-.605-.346-.692Zm-.691-3.975c-.259-.259-.692-.518-.692-.778-.086-.345.173-.777.433-1.209.172.604.259 1.123.432 1.728-.087.086-.173.173-.173.259Zm2.16-5.531c.346.865.692 1.815 1.037 2.679-.086 0-.605.26-.691.346-.346-.864-.778-1.815-1.123-2.679.086-.086.604-.346.777-.346Zm192.37 82.618c.432-.173.951-.26 1.642-.433-.778.605-1.383 1.037-1.901 1.556-.087-.087-.173-.173-.259-.173.172-.346.345-.605.518-.951v.001ZM97.866 49.469c.518-.346.95-.605 1.469-.951l.173.173c-.519.692-.951 1.383-1.556 2.247-.086-.605-.086-.951-.173-1.383-.086 0 0 0 .087-.086Zm25.32 43.728c.778-.345 1.556-.691 2.507-1.123-.087.518-.087.864-.087 1.21-.259-.087-.605-.173-.864-.173-.518.086-1.469.778-1.901.864-.087 0 .345-.691.345-.778Zm64.815 73.284c.173.864 1.815 1.296.173 2.16.259.173.518.26.778.433 0 .086-.087.259-.173.345-.173.087-.519.26-.692.173-.086 0-.259-.346-.259-.518 0-.778.087-1.556.173-2.593Z"
      style={{
        fill: '#dd3735',
        fillRule: 'nonzero',
      }}
      transform="translate(21.015 21.907) scale(3.83583)"
    />
  </svg>
);
export default SvgPostcss;

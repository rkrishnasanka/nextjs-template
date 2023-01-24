import TestImage from '../../assets/test.jpeg';
import Image from 'next/image'

export const TestComponent = () => {
    return (
        <div className="animate-bounce">
            <h1 >Test component</h1>
            <Image src={TestImage} alt="test image" />
        </div>
    );
};

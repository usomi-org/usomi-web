import Image from 'next/image';

interface ImageComponentProps {
    imagePath: string;
    width: number;
    height: number;
    alt?: string; // optional unless overridden
    className?: string;
}

const ImageComponent = ({imagePath, width, height, alt = 'Descriptive Image', className = 'rounded-2xl object-cover'}: ImageComponentProps) => {
    return (
        <div className="mt-8">
            <Image
                priority={true}
                src={imagePath}
                alt={alt}
                width={width}
                height={height}
                className={className}
            />
        </div>
    );
};

export default ImageComponent;
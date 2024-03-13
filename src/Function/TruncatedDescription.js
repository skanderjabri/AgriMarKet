const TruncatedDescription = ({ description, maxLength }) => {
    if (description.length <= maxLength) {
        return <span>{description}</span>;
    } else {
        const truncatedText = description.substring(0, maxLength) + '...';
        return <span>{truncatedText}</span>;
    }
};

export default TruncatedDescription
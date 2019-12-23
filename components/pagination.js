import PropTypes from 'prop-types'
import Link from 'next/link'

const Pagination = ({ title, path, position }) => {
    const isNext = position === 'next'
    return (
        <>
            <Link href={path}>
                <a>
                    <small>Read {position} post </small>
                    {title}
                </a>
            </Link>
        </>
    )
};

Pagination.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['next', 'previous']),
};

export default Pagination

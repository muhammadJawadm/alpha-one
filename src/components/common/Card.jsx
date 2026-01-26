import { classNames } from '../../utils/helpers';

const Card = ({ 
  children, 
  title, 
  subtitle,
  className = '',
  headerAction,
  noPadding = false
}) => {
  return (
    <div className={classNames(
      'bg-[#1E293B] rounded-lg shadow-lg border border-gray-700',
      className
    )}>
      {(title || subtitle || headerAction) && (
        <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
          <div>
            {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
};

export default Card;

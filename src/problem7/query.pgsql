SELECT usd_balances.address
	FROM (SELECT address, SUM (
            CASE 
                WHEN denom = 'usdc' THEN amount * 0.000001
			    WHEN denom = 'swth' THEN amount * 0.00000005
			    WHEN denom = 'tmz' THEN amount * 0.003
		    END
        ) usd_balance
	    FROM balances
	    GROUP BY address
	) usd_balances
INNER JOIN (
	    SELECT DISTINCT address 
	    FROM trades 
	    WHERE block_height > 730000
	) recent_trades
	ON (usd_balances.address = recent_trades.address) 
	WHERE usd_balances.usd_balance >= 500 
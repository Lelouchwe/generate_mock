new Array(10).fill()
             .map((e, i) => ({
                id: i,
                sub: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
                product_type: Math.round(0.5 + Math.random() * 2),
                service_commission: Math.random().toFixed(2),
                cost: Math.ceil(Math.random() * 10000),
                period: Math.round(0.5 + Math.random() * 360),
                status: Math.round(0.5 + Math.random() * 2),
                type: Math.round(0.5 + Math.random() * 3),
             }));
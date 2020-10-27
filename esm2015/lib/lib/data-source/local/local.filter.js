export function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
export class LocalFilter {
    static filter(data, field, search, customFilter) {
        const filter = customFilter ? customFilter : filterValues;
        return data.filter((el) => {
            const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii9wcml2YXRlL3RtcC9uZzJtb2UxLjcuMC9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFhLEVBQUUsTUFBYztJQUN4RCxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVELE1BQU0sT0FBTyxXQUFXO0lBRXRCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBZ0IsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLFlBQXVCO1FBQ3BGLE1BQU0sTUFBTSxHQUFhLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFFcEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDeEIsTUFBTSxLQUFLLEdBQUcsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclZhbHVlcyh2YWx1ZTogc3RyaW5nLCBzZWFyY2g6IHN0cmluZykge1xuICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTG9jYWxGaWx0ZXIge1xuXG4gIHN0YXRpYyBmaWx0ZXIoZGF0YTogQXJyYXk8YW55PiwgZmllbGQ6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIGN1c3RvbUZpbHRlcj86IEZ1bmN0aW9uKTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgZmlsdGVyOiBGdW5jdGlvbiA9IGN1c3RvbUZpbHRlciA/IGN1c3RvbUZpbHRlciA6IGZpbHRlclZhbHVlcztcblxuICAgIHJldHVybiBkYXRhLmZpbHRlcigoZWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGVsW2ZpZWxkXSA9PT0gJ3VuZGVmaW5lZCcgfHwgZWxbZmllbGRdID09PSBudWxsID8gJycgOiBlbFtmaWVsZF07XG4gICAgICByZXR1cm4gZmlsdGVyLmNhbGwobnVsbCwgdmFsdWUsIHNlYXJjaCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==